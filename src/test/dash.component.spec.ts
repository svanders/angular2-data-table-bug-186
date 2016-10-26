import {TestBed, getTestBed, ComponentFixture, async} from '@angular/core/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http,
  ResponseOptions,
  Response
} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {Router, RouterModule} from '@angular/router';
import {Angular2DataTableModule, DataTable} from 'angular2-data-table';

// Load the implementations to be mocked
import { Service } from '../app/app.service';

// Load the implementations that should be tested
import {DashComponent, Stats} from "../app/dash.component";

describe('186 component unit test', () => {

  beforeEach(() => {
    // provide our implementations or mocks to the dependency injector
    TestBed.configureTestingModule({
      declarations: [
        DashComponent
      ],
      providers: [
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        {
          provide: Router,
          useClass: RouterModule
        },
        Service],
      imports: [
        Angular2DataTableModule
      ]
    })
  });


  it('Can load empty list', () => {
      let mockBackend = TestBed.get(MockBackend);
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: []
            })));
        });

      TestBed.compileComponents().then(() => {
        let fixture: ComponentFixture<DashComponent> = TestBed.createComponent(DashComponent);
        fixture.componentInstance.ngOnInit();

        // Verify
        let rows = fixture.componentInstance.rows;
        expect(rows.length).toBe(1);
        let totalRow: Stats = new Stats();
        totalRow.name = "All";
        totalRow.count = 0;
        totalRow.id = 0;
        expect(rows).toContain(totalRow);
      });
    }
  );

  it('Can load list', () => {
      let mockBackend = TestBed.get(MockBackend);
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: [
                {
                  id: 1,
                  name: 'row',
                },
                {
                  id: 2,
                  name: 'row',
                }]
            })));
        });
      TestBed.compileComponents().then(() => {
        let fixture: ComponentFixture<DashComponent> = TestBed.createComponent(DashComponent);
        fixture.componentInstance.ngOnInit();

        // Verify
        let rows = fixture.componentInstance.rows;
        expect(rows.length).toBe(2);

        let statsRow: Stats = new Stats();
        statsRow.name = "row";
        statsRow.count = 2;
        statsRow.id = 0;
        expect(rows).toContain(statsRow);

        let totalRow: Stats = new Stats();
        totalRow.name = "All";
        totalRow.count = 2;
        totalRow.id = 0;
        expect(rows).toContain(totalRow);
      });
    }
  );

});

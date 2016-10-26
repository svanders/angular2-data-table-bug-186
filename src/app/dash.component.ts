import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Service } from './app.service';

import {
  TableOptions,
  ColumnMode
} from 'angular2-data-table';
import * as _ from 'underscore';

@Component({
  selector: 'my-app',
  templateUrl: './dash.component.html'
})

export class DashComponent implements OnInit {

  rows: Stats[] = [];
  options = new TableOptions({
    columnMode: ColumnMode.force,
    headerHeight: 50,
    rowHeight: 'auto',
    loadingIndicator: true,
    selectionType: false,
    count: 3
  });


  constructor(public router: Router, public service: Service) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(
      tasks => {
        this.populateData(tasks);
      }
    );
  }

  private populateData(data) {
    let stats = _.countBy(data, function (data) {
      return data.name.split(' ').join('_');
    });
    let totalCount: number = 0;
    for (var taskName in stats) {
      if (stats.hasOwnProperty(taskName)) {
        var statsRow: Stats = new Stats();
        statsRow.name = taskName.split('_').join(' ');
        statsRow.count = stats[taskName];
        statsRow.id = 0;
        totalCount += statsRow.count;
        this.rows.push(statsRow);
      }
    }
    var statsRow: Stats = new Stats();
    statsRow.name = 'All';
    statsRow.count = totalCount;
    statsRow.id = 0;
    this.rows.push(statsRow);
  }

  onSelect(stats: Stats) {
    this.router.navigate(['/task', stats.name]);
  }
}
;


export class Stats {
  id: number;
  count: number;
  name: string;
}

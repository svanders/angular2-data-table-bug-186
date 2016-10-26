
### Introduction

Sample project to help diagnose angular2-data-table-bug-186 https://github.com/swimlane/angular2-data-table/issues/186

git clone TODO
cd angular2-data-table-bug-186

# install the repo with npm
npm install

# run the tests
npm run test

Test results printed to stdout, and also in html in 'report/test/index.html'

NOTE - tests are in src/test/dash.components.spec.ts

Commenting out either one of the tests (so there is only one) then the test will pass,
but running both tests results in the error occuring for the 2nd test

Error: Error in ./DashComponent class DashComponent - inline template:6:6 caused by: Cannot read property 'unsubscribe' of undefined
TypeError: Cannot read property 'unsubscribe' of undefined
at DataTable.ngOnDestroy (webpack:///webpack:/src/components/datatable.component.ts:144:24 <- config/spec-bundle.js:44431:28)
at _View_DashComponent0.destroyInternal (/DynamicTestModule/DashComponent/component.ngfactory.js:222:32)
at _View_DashComponent0.AppView.destroyLocal (webpack:///~/@angular/core/src/linker/view.js:163:0 <- config/spec-bundle.js:59677:14)
at _View_DashComponent0.DebugAppView.destroyLocal (webpack:///~/@angular/core/src/linker/view.js:324:0 <- config/spec-bundle.js:59838:43)
at _View_DashComponent0.AppView._destroyRecurse (webpack:///~/@angular/core/src/linker/view.js:151:0 <- config/spec-bundle.js:59665:14)
at _View_DashComponent_Host0.AppView._destroyRecurse (webpack:///~/@angular/core/src/linker/view.js:149:0 <- config/spec-bundle.js:59663:25)
at _View_DashComponent_Host0.AppView.destroy (webpack:///~/@angular/core/src/linker/view.js:137:0 <- config/spec-bundle.js:59651:14)
at ComponentRef_.destroy (webpack:///~/@angular/core/src/linker/component_factory.js:118:51 <- config/spec-bundle.js:36900:82)
at ComponentFixture.destroy (webpack:///~/@angular/core/bundles/core-testing.umd.js:261:0 <- config/spec-bundle.js:12609:35)
at webpack:///~/@angular/core/bundles/core-testing.umd.js:719:61 <- config/spec-bundle.js:13067:78
at Array.forEach (native)
at TestBed.resetTestingModule (webpack:///~/@angular/core/bundles/core-testing.umd.js:719:0 <- config/spec-bundle.js:13067:34)
at Function.TestBed.resetTestingModule (webpack:///~/@angular/core/bundles/core-testing.umd.js:627:0 <- config/spec-bundle.js:12975:26)
at Object.<anonymous> (webpack:///~/@angular/core/bundles/core-testing.umd.js:953:0 <- config/spec-bundle.js:13301:21)
at ZoneDelegate.invoke (webpack:///~/zone.js/dist/zone.js:232:0 <- config/spec-bundle.js:49577:26)
at ProxyZoneSpec.onInvoke (webpack:///~/zone.js/dist/proxy.js:79:0 <- config/spec-bundle.js:49241:39)
at ZoneDelegate.invoke (webpack:///~/zone.js/dist/zone.js:231:0 <- config/spec-bundle.js:49576:32)
at Zone.run (webpack:///~/zone.js/dist/zone.js:114:0 <- config/spec-bundle.js:49459:43)
at Object.<anonymous> (webpack:///~/zone.js/dist/jasmine-patch.js:102:0 <- config/spec-bundle.js:48956:34)
at ZoneQueueRunner.jasmine.QueueRunner.ZoneQueueRunner.execute (webpack:///~/zone.js/dist/jasmine-patch.js:132:0 <- config/spec-bundle.js:48986:42)
at ZoneDelegate.invokeTask (webpack:///~/zone.js/dist/zone.js:265:0 <- config/spec-bundle.js:49610:35)
at Zone.runTask (webpack:///~/zone.js/dist/zone.js:154:0 <- config/spec-bundle.js:49499:47)
at drainMicroTaskQueue (webpack:///~/zone.js/dist/zone.js:401:0 <- config/spec-bundle.js:49746:35)


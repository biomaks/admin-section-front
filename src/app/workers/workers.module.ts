import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkersComponent} from './workers.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import {WorkersRoutingService} from './workers-routing.service';
import {WorkersGridComponent} from './workers-grid/workers-grid.component';
import {WorkersService} from './workers.service';
import {WorkerEditComponent} from './worker-edit/worker-edit.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
      WorkersComponent,
      WorkersGridComponent,
      WorkerEditComponent
    ],
    imports: [
      CommonModule,
      NgbModule,
      HttpModule,
      ReactiveFormsModule,
      WorkersRoutingService
    ],
    providers: [WorkersService]
  }
)
export class WorkersModule {

}

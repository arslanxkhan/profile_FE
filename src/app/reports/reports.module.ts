import { ReportsComponent } from './reports.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [ReportsComponent],
  imports: [ ReportsRoutingModule,CommonModule,NgApexchartsModule],
  exports: [ReportsComponent],
})
export class ReportsModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMultiSelectModule  } from 'angular2-multiselect-dropdown';



import { AppComponent } from './app.component';
import { ExperimentSearchComponent } from './components/experiment-search.component';
import { DashboardComponent } from './components/dashboard.component';

import { ExpressionDetailComponent } from './components/expression-detail.component';
import { HeatmapComponent } from './components/heatmap.component';
import { BarChartComponent } from './components/bar-chart.component';
import { BoxPlotComponent } from './components/box-plot.component';
import { DataTableComponent } from './components/data-table.component';

import { ExperimentService } from './services/experiment.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
		DashboardComponent,
		ExperimentSearchComponent,
		ExpressionDetailComponent,
		HeatmapComponent,
		BarChartComponent,
		BoxPlotComponent,
		DataTableComponent,
  ],
  imports: [
    BrowserModule,
		FormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,		
		AngularMultiSelectModule,

		
		
  ],
  providers: [ ExperimentService, ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

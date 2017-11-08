import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './components/dashboard.component';
import { ExperimentSearchComponent }      from './components/experiment-search.component';
import { ExpressionDetailComponent }  from './components/expression-detail.component';

import { HeatmapComponent } from './components/heatmap.component';
import { BarChartComponent } from './components/bar-chart.component';
import { BoxPlotComponent } from './components/box-plot.component';
import { DataTableComponent } from './components/data-table.component';
import { AnovaComponent } from './components/anova.component';


const routes: Routes = [
  {
		path:'',
		redirectTo: '/dashboard',
		pathMatch: 'full',
	},
	{path: 'experiment-search', component: ExperimentSearchComponent,
	children:[
		{path: 'heatmap', component: HeatmapComponent},
		{path: 'barchart', component: BarChartComponent},
		{path: 'datatable', component: DataTableComponent},
		{path: 'boxplot', component: BoxPlotComponent},
		{path: 'anova', component: AnovaComponent},
		
		
	]},
	{path: 'dashboard', component: DashboardComponent, },
	{path:'gene-search', component: ExpressionDetailComponent,},
	
	
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
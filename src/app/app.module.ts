import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExperimentSearchComponent } from './components/experiment-search.component';
import { DashboardComponent } from './components/dashboard.component';

import { ExpressionDetailComponent } from './components/expression-detail.component';

import { ExperimentService } from './services/experiment.service';



@NgModule({
  declarations: [
    AppComponent,
		DashboardComponent,
		ExperimentSearchComponent,
		ExpressionDetailComponent,
  ],
  imports: [
    BrowserModule,
		FormsModule,
		RouterModule.forRoot([
			{
				path:'',
				redirectTo: '/dashboard',
				pathMatch: 'full',
			},
			{
				path: 'experiment-search',
				component: ExperimentSearchComponent,
			},
			{
				path: 'dashboard',
				component: DashboardComponent, 
			},
])

		
		
  ],
  providers: [ ExperimentService, ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Experiment } from '../experiment';
import { ExperimentService } from '../services/experiment.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: '../views/dashboard.component.view.html', 
})

export class DashboardComponent implements OnInit{
	experiments: Experiment[] = [];
	
	constructor(private experimentService:ExperimentService){}
	
	ngOnInit(): void{
		this.experimentService.getExperiments()
			.then(experiments => this.experiments=experiments.slice(0,5));
	}
	
	

}
import { Injectable } from '@angular/core';
import { Experiment } from '../experiment';
import { EXPERIMENTS } from '../mock-data/mock-experiment';


@Injectable()

export class ExperimentService {
	getExperiments(): Promise<Experiment[]> {
		return Promise.resolve(EXPERIMENTS);
	};
	
	getExperimentsSlowly(): Promise<Experiment[]>{
		return new Promise(resolve => {
      setTimeout(() => resolve(this.getExperiments()), 2000);
		})
	};
	
	
}


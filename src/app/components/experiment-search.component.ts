import { Component, OnInit } from '@angular/core';
import { Gene } from '../gene';
import { Experiment } from '../experiment';
import { ExperimentService } from '../services/experiment.service';
import { EXPERIMENTS } from '../mock-data/mock-experiment'


export class Condition{
	id: number;
	name: string;
}

export class GeneExpression{
	id: number;
	gene_id: number;
	expression: number;
	experiment_id: number;
	condition_id: number;
}


//#########fake data##########


const CONDITIONS: Condition[]=[
	{id: 1, name:'HFHF/ANGII/41-2272/22 DAYS'},
	{id: 2, name:'condition2'},
	{id: 3, name:'condition3'},
	{id: 4, name:'condition4'},
	{id: 5, name:'condition5'},
	{id: 6, name:'condition6'},
	{id: 7, name:'condition7'},
	{id: 8, name:'condition8'},
	{id: 9, name:'condition9'},
	{id: 10, name:'condition10'},	
];

const GENES: Gene[] = [
	{id: 1, name: 'PTGS2'},
	{id: 2, name: 'gene2'},
	{id: 3, name: 'gene3'},
	{id: 4, name: 'gene4'},
	{id: 5, name: 'gene5'},
	{id: 6, name: 'gene6'},
	{id: 7, name: 'gene7'},
	{id: 8, name: 'gene8'},
	{id: 9, name: 'gene9'},
	{id: 10, name: 'gene10'},
	{id: 11, name: 'gene11'},
]

const EXPRESSIONS: GeneExpression[]=[
	{id:1, gene_id: 1, expression: 1.1, experiment_id: 1, condition_id: 1},
	{id:2, gene_id: 2, expression: 1.2, experiment_id: 1, condition_id: 1},
	{id:3, gene_id: 3, expression: 1.3, experiment_id: 1, condition_id: 1},
	{id:4, gene_id: 4, expression: 1.4, experiment_id: 1, condition_id: 2},
	{id:5, gene_id: 5, expression: 1.51, experiment_id: 1, condition_id: 2},
	{id:6, gene_id: 6, expression: 1.61, experiment_id: 1, condition_id: 2},
	{id:7, gene_id: 7, expression: 1.71, experiment_id: 1, condition_id: 3},
	{id:8, gene_id: 8, expression: 1.81, experiment_id: 1, condition_id: 3},
	{id:9, gene_id: 9, expression: 1.91, experiment_id: 1, condition_id: 3},
	{id:10, gene_id: 10, expression: 1.10, experiment_id: 1, condition_id:3},
]


@Component({
  selector: 'experiment-search',
  templateUrl: '../views/experiment-search.component.view.html',
	
})


export class ExperimentSearchComponent implements OnInit {
  title = 'BDNA Analysis Tools';
	experiments: Experiment[];
	
	conditions = CONDITIONS;
	genes = GENES;
	expressions = EXPRESSIONS;
	constructor(private experimentService: ExperimentService){	}
	
	getExperiemnts(): void{
		this.experimentService.getExperiments().then(experiments => this.experiments = experiments);
	}
//	
	ngOnInit(): void{
		this.getExperiemnts();
	}
	
	
	
	
	selectedExperiment: Experiment;
	selectedCondition: Condition;
	selectedGene: Gene;
	
	onSelectExperiment(experiment: Experiment): void {
		this.selectedExperiment = experiment;
	};
	
	onSelectCondition(condition: Condition):void{
		this.selectedCondition = condition;
	}
	
	onSelectGene(gene: Gene):void{
		this.selectedGene = gene;
	}
	
	
	
}

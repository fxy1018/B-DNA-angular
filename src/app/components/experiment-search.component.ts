import { Component, OnInit } from '@angular/core';
import { Gene } from '../gene';
import { Experiment } from '../experiment';
import { ExperimentService } from '../services/experiment.service';
import { EXPERIMENTS } from '../mock-data/mock-experiment'
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

export class Condition{
	id: number;
	itemName: string;
}

export class Expression{
	id: number;
	gene_id: number;
	expression: number;
	experiment_id: number;
	condition_id: number;
}



//#########fake data##########


const CONDITIONS: Condition[]=[
	{id: 1, itemName:'HFHF/ANGII/41-2272/22 DAYS'},
	{id: 2, itemName:'condition2'},
	{id: 3, itemName:'condition3'},
	{id: 4, itemName:'condition4'},
	{id: 5, itemName:'condition5'},
	{id: 6, itemName:'condition6'},
	{id: 7, itemName:'condition7'},
	{id: 8, itemName:'condition8'},
	{id: 9, itemName:'condition9'},
	{id: 10, itemName:'condition10'},	
];

const GENES: Gene[] = [
	{id: 1, itemName: 'PTGS2'},
	{id: 2, itemName: 'gene2'},
	{id: 3, itemName: 'gene3'},
	{id: 4, itemName: 'gene4'},
	{id: 5, itemName: 'gene5'},
	{id: 6, itemName: 'gene6'},
	{id: 7, itemName: 'gene7'},
	{id: 8, itemName: 'gene8'},
	{id: 9, itemName: 'gene9'},
	{id: 10, itemName: 'gene10'},
	{id: 11, itemName: 'gene11'},
]

const EXPRESSIONS: Expression[]=[
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
	
	conditions:Condition[];
	genes: Gene[];
	expressions: Expression[];
	
	constructor(private experimentService: ExperimentService){	}
	
	getExperiemnts(): void{
		this.experimentService.getExperiments().then(experiments => this.experiments = experiments);
	}
	
	getConditions(exp_id): void{
		console.log(exp_id)
		this.conditions = CONDITIONS;
	}
	
	getGenes(cons): void{
		console.log(cons)
		this.genes = GENES;
	}
	
	
//	
	ngOnInit(): void{
				this.getExperiemnts();
//		    this.getConditions(this.selectedExperiment['id']);
        this.selectedConditions = null;
        this.dropdownConditoinsSettings = { 
                                  singleSelection: false, 
                                  text:"Select Conditions",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                };
		
				this.selectedGenes = null;
				this.dropdownGenesSettings = { 
                                  singleSelection: false, 
                                  text:"Select Genes",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                };		
	}
	
	selectedExperiment: Experiment;
  selectedConditions: Condition[];
  dropdownConditoinsSettings = {};
   
	onConditionsSelect(item:any){
			console.log(item);
			console.log(this.selectedConditions);
	}
	OnConditionsDeSelect(item:any){
			console.log(item);
			console.log(this.selectedConditions);
	}
	onConditionsSelectAll(items: any){
			console.log(items);
	}
	onConditionsDeSelectAll(items: any){
			console.log(items);
	}
	
	
	selectedGenes: Gene[];
  dropdownGenesSettings = {};

	onGenesSelect(item:any){
			console.log(item);
			console.log(this.selectedGenes);
	}
	OnGenesDeSelect(item:any){
			console.log(item);
			console.log(this.selectedGenes);
	}
	onGenesSelectAll(items: any){
			console.log(items);
	}
	onGenesDeSelectAll(items: any){
			console.log(items);
	}
	
	getExpressions(): void{
		this.expressions = EXPRESSIONS
		console.log(this.expressions)
	}
	
	downloadExpressions():void{
		console.log("download data button function")
	}
	
	
	
	
	
	
	
}

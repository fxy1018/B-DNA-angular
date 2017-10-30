import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Gene } from '../gene';
import { Experiment } from '../experiment';
import { ExperimentService } from '../services/experiment.service';
import { EXPERIMENTS } from '../mock-data/mock-experiment'
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Expression } from './experiment-search.component';

export class Name{
	id: number;
	firstname: string;
	lastname: string;
	username: string;
}

const NAMES: Name[] =[
	{id:1, firstname:'Mark', lastname:'Otto', username:'@mdo'},
	{id:2, firstname:'Jacob', lastname:'Thornton	', username:'@fat'},
	{id:3, firstname:'Larry', lastname:'the Bird	', username:'@twitter'}
]





declare var Plotly: any;
declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'data-table',
    templateUrl: '../views/data-table.component.view.html',

})

export class DataTableComponent implements OnInit {
    @Input() data: any;
    // @Input() layout:any;
    // @Input() options: any;
    // @Input() displayRawData: boolean;

    // data = [{
    //     x: ['giraffes', 'orangutans', 'monkeys'],
    //     y: [20, 14, 23],
    //     type: 'bar'
    // }];

    // layout = {barmode:'group'};
    // options = null;
    // displayRawData = null;
		
		names: Name[];
	
    ngOnInit(): void{
				this.names = NAMES;
        console.log('hello from heatmap')
        console.log(this.data)
        this.data = [{
            x: ['giraffes', 'orangutans', 'monkeys'],
            y: [20, 14, 23],
            type: 'bar'
        }]
        Plotly.newPlot('datatable', this.data);
        $('#data_table_exp').DataTable({
					"data": NAMES,
					"columns": [
          {'data':'id'},
          {'data':'firstname'},
          {'data':'lastname'},
          {'data':'username'}]
				});


    };
    // ngAfterViewInit(){
    //     document.getElementById('data_table_exp').DataTable();
    // }


}
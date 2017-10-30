import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Gene } from '../gene';
import { Experiment } from '../experiment';
import { ExperimentService } from '../services/experiment.service';
import { EXPERIMENTS } from '../mock-data/mock-experiment'
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Expression } from './experiment-search.component';




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

    ngOnInit(): void{
        console.log('hello from heatmap')
        console.log(this.data)
        this.data = [{
            x: ['giraffes', 'orangutans', 'monkeys'],
            y: [20, 14, 23],
            type: 'bar'
        }]
        Plotly.newPlot('datatable', this.data);
        $('#data_table_exp').DataTable();


    };
    // ngAfterViewInit(){
    //     document.getElementById('data_table_exp').DataTable();
    // }


}
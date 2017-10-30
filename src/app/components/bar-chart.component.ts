import { Component, Input, OnInit } from '@angular/core';
import { Gene } from '../gene';
import { Experiment } from '../experiment';
import { ExperimentService } from '../services/experiment.service';
import { EXPERIMENTS } from '../mock-data/mock-experiment'
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Expression } from './experiment-search.component';

declare var Plotly: any;

@Component({
    selector: 'bar-chart',
    templateUrl: '../views/bar-chart.component.view.html',

})

export class BarChartComponent implements OnInit {
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
        Plotly.newPlot('barchart', this.data);
    }
}
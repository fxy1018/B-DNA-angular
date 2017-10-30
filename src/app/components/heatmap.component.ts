import { Component, Input, OnInit } from '@angular/core';
import { Gene } from '../gene';
import { Experiment } from '../experiment';
import { ExperimentService } from '../services/experiment.service';
import { EXPERIMENTS } from '../mock-data/mock-experiment'
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Expression } from './experiment-search.component';

declare var Plotly: any;

@Component({
    selector: 'heatmap',
    templateUrl: '../views/heatmap.component.view.html',

})

export class HeatmapComponent implements OnInit {
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
            z: [[1, 20, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
            x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            y: ['Morning', 'Afternoon', 'Evening'],
            type: 'heatmap'
        }]
        Plotly.newPlot('heatmap', this.data);
    }
}
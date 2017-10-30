import { Component, Input, OnInit } from '@angular/core';
import { Gene } from '../gene';
import { Experiment } from '../experiment';
import { ExperimentService } from '../services/experiment.service';
import { EXPERIMENTS } from '../mock-data/mock-experiment'
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { Expression } from './experiment-search.component';

declare var Plotly: any;

@Component({
    selector: 'box-plot',
    templateUrl: '../views/box-plot.component.view.html',

})

export class BoxPlotComponent implements OnInit {
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



    getData(): any{
        var y0 = [];
        var y1 = [];
        for (var i = 0; i < 50; i ++) {
            y0[i] = Math.random();
            y1[i] = Math.random() + 1;
        }

        var trace1 = {
            y: y0,
            type: 'box'
        };

        var trace2 = {
            y: y1,
            type: 'box'
        };

        // this.data = [trace1, trace2];
        return [trace1, trace2]
};


    ngOnInit(): void{
        console.log('hello from boxplot');
        console.log(this.data);
        // this.data = [
        //     {
        //         y: [0, 1, 1, 2, 3, 5, 8, 13, 21],
        //         boxpoints: 'all',
        //         jitter: 0.3,
        //         pointpos: -1.8,
        //         type: 'box'
        //     }
        // ];
        this.data = this.getData();

        Plotly.newPlot('boxplot', this.data);
    }
}
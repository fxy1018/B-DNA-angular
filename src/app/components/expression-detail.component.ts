import { Component, Input, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';

import { Gene } from '../gene';
import { Expression } from './experiment-search.component';

@Component({
	selector: 'expression-detail',
	templateUrl: '../views/expression-detail.component.html',
})

export class ExpressionDetailComponent implements OnInit{
	@Input() expressions: Expression[];
	routeLinks: any[];
	activeLinkIndex = -1;
	constructor(
		private route: ActivatedRoute,
		private location: Location,
	  private router: Router)
	{
			this.routeLinks  = [
				{
					label: 'Heatmap',
					link: './heatmap',
					index:0
				},
				{
					label: 'Barchart',
					link: './barchart',
					index:1
				},
				{
					label: 'boxplot',
					link: './boxplot',
					index:2
				},
				{
					label: 'Datatable',
					link: './datatable',
					index:3
				}

			]
	};
	
	ngOnInit(): void {
		this.router.events.subscribe((res) => {
			this.activeLinkIndex = this.routeLinks.indexOf(
				this.routeLinks.find(tab=> tab.link==='.'+this.router.url));
		});
	}
	
	

}
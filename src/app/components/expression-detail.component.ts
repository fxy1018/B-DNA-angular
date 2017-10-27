import { Component, Input, OnInit } from '@angular/core';
import {  ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Gene } from '../gene';


@Component({
	selector: 'expression-detail',
	template: `
		<div *ngIf="gene">
			<h2>{{gene.name}}</h2>
`,
	
})

export class ExpressionDetailComponent {
	@Input() gene: Gene
}
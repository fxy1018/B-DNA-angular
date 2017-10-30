import { Component, Input, OnInit } from '@angular/core';
import {  ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Gene } from '../gene';
import { Expression } from './experiment-search.component';

@Component({
	selector: 'expression-detail',
	templateUrl: '../views/expression-detail.component.html',
})

export class ExpressionDetailComponent {
	@Input() expressions: Expression[];


}
import { Component, Input } from '@angular/core';
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
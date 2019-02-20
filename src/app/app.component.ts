import { Component } from '@angular/core';
import { isFiniteNumber } from 'basic-data-handling/isFiniteNumber';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'data-table-component';
	isNumber = isFiniteNumber(Infinity);

}

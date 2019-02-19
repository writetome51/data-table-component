/************************
The purpose of this file is to show how CollapsibleDetailRowDirective is imported and used
in this component.
************************/

import {
	AfterViewInit,
	Component, Input, OnDestroy,
	OnInit,
	ViewChild,
	ViewEncapsulation
} from '@angular/core';
import { MatSort } from '@angular/material';

import { fuseAnimations } from '@fuse/animations';
import { UsersDataSourceService } from '../services/users-data-source.service';
import { UnifyComponent } from '../../../../../unify.component';
import { Subscription } from 'rxjs/Subscription';
import { IColumnSortInfo } from '../../../../../interfaces/IColumnSortInfo';
import { trigger, animate, state, style, transition } from '@angular/animations';
import { UserColumnInfoService } from '../services/user-column-info.service';
import { IDBUser } from '../../../../../interfaces/IDBUser';
import { UsersTableHTMLAttributesService } from '../services/users-table-html-attributes.service';

import { CollapsibleDetailRowDirective } from '../collapsible-detail-row.directive';


@Component({
	selector: 'linguists-list',
	templateUrl: './linguists-list.component.html',
	styleUrls: ['./linguists-list.component.scss'],
	encapsulation: ViewEncapsulation.None,

	// Required for the collapsible rows:
	animations: [fuseAnimations,
		trigger('detailExpand', [
			state('void', style({height: '0px', minHeight: '0', visibility: 'hidden'})),
			state('*', style({height: '*', visibility: 'visible'})),
			transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	]

})


export class LinguistsListComponent implements OnInit, AfterViewInit {

	@ViewChild(MatSort) sort: MatSort;
	dropdownMenu = {rowIndex: -1, isOpen: false};
	highlightedDropdownItem = -1;
	highlightedRow = -1;
	highlightedSubtableRow = -1;
	linguists: any;
	user: any;
	dialogRef: any;
	sortSubscription: Subscription;
	private openedRow: CollapsibleDetailRowDirective;  // notice this!!!!!!!!!!!!!!!!!!!!!!!!!!!
	private openedSubrow: CollapsibleDetailRowDirective; // notice this!!!!!!!!!!!!!!!!!!!!!!!


	constructor(
		public usersDataSourceService: UsersDataSourceService,
		public userColumnInfoService: UserColumnInfoService,
		public htmlAttributesService: UsersTableHTMLAttributesService
	) {
		super();
	}


	ngOnInit() {
		this.usersDataSourceService.loadNewSort();
	}


	ngAfterViewInit() {
		this.sortSubscription = this.sort.sortChange.subscribe(
			(column: IColumnSortInfo) => {
				this.usersDataSourceService.loadNewSort(column);
			}
		);

		this.subscriptions = this.subscriptions.concat(
			// Add any subscriptions this component is using to this array:
			[
				this.sortSubscription,
			]
		);
	}


	onToggleRow(cdkDetailRow: CollapsibleDetailRowDirective): void { // notice this!!!!!!!!!!!!!!!!!!!!!!
		if (this.openedRow && this.openedRow.expended) {
			this.openedRow.toggle();
		}
		this.openedRow = cdkDetailRow.expended ? cdkDetailRow : undefined;
	}


	onToggleSubrow(cdkDetailRow: CollapsibleDetailRowDirective, row: IDBUser): void { // notice this!!!!!!!!!!!!!!!!!!!!!!
		if (this.openedSubrow && this.openedSubrow.expended) {
			this.openedSubrow.toggle();
		}
		this.openedSubrow = cdkDetailRow.expended ? cdkDetailRow : undefined;
		this.usersDataSourceService.set_currentlyViewedRates(row);
	}


	highlightRow(highlightedRow, rowIndex) {
		this[highlightedRow] = rowIndex;
	}


	toggleDropdown(rowIndex, event) {
		event.stopPropagation();
		if (this.dropdownMenu.rowIndex === rowIndex) {
			this.dropdownMenu.isOpen = (!this.dropdownMenu.isOpen);
		}
		else {
			this.dropdownMenu = {rowIndex: rowIndex, isOpen: true};
		}
	}


	closeDropdown() {
		this.dropdownMenu = {rowIndex: -1, isOpen: false};
	}


}


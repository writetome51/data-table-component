import {
    AfterViewInit, Component, OnInit, ViewChild
} from '@angular/core';
import { CollapsibleDetailRowDirective }
    from './collapsible-detail-row-directive/collapsible-detail-row.directive';
import { PaginatorService } from 'src/app/data-table.component';


@Component({
    selector: 'data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.css']
})


export class DataTableComponent implements OnInit, AfterViewInit {


    constructor(
        public paginatorSvc: PaginatorService,
        public dataSource: DataSource,
        public paginatorDataCtlr: PaginatorDataController
    ) {
    }


    ngOnInit() {
    }


    ngAfterViewInit() {
    }


}

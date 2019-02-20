import { Injectable } from '@angular/core';
import { PaginatorDataController } from '@writetome51/paginator-data-controller';
import { PaginatorService } from '@writetome51/paginator-service';
import { DataService } from './data.service';


@Injectable()
export class PaginatorDataControllerService extends PaginatorDataController {

	constructor(
		paginator: PaginatorService,
		dataSource: DataService
	) {
		super(paginator, dataSource);
	}
}

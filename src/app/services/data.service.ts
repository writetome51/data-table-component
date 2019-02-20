import { Injectable } from '@angular/core';
import { data } from '../data';
import { getAdjacentAt } from '@writetome51/array-get-adjacent-at';


@Injectable()
export class DataService {

	private __data = data;


	getDataTotal(): number {
		return this.__data.length;
	}


	getData(batchNumber, numberOfItemsToGet): any[] {
		return getAdjacentAt(
			((batchNumber - 1) * numberOfItemsToGet),
			numberOfItemsToGet,
			this.__data
		);
	}

}

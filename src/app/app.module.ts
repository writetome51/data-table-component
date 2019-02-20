import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table.component';
import { PaginatorDataControllerService } from './services/paginator-data-controller.service';
import { DataService } from './services/data.service';


@NgModule({
	declarations: [
		AppComponent,
		DataTableComponent
	],
	imports: [
		BrowserModule
	],
	providers: [PaginatorDataControllerService, DataService],
	bootstrap: [AppComponent]
})

export class AppModule {
}

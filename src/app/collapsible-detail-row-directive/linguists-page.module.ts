/*******************
This file just shows an example of how to import a directive class into a module 
so that it's available to use in a component and html template connected to that 
component.  The specific directive here is CollapsibleDetailRowDirective.

********************/


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';

import {
	MatIconModule,	MatInputModule, MatListModule, MatToolbarModule
} from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { LinguistsPageComponent } from './linguists-page.component';
import { CommonModule } from '@angular/common';

import { CollapsibleDetailRowDirective } from './collapsible-detail-row.directive';


@NgModule({
	declarations: [
		LinguistsListComponent,
		LinguistsPageComponent,
		CollapsibleDetailRowDirective,  // It must be in the declarations.
	],
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		CdkTableModule,
		MatListModule,
		MatOptionModule,
		MatSelectModule,
		MatSortModule,
		FuseSharedModule,
		FuseConfirmDialogModule,
	],
	providers: [
		UsersApiService,
		UsersDataSourceService
	],
})

export class LinguistsPageModule {
}

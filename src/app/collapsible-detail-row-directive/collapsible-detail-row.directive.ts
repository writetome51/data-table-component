import {
	Directive, EventEmitter, HostBinding,
	HostListener, Input, Output, TemplateRef, ViewContainerRef
} from '@angular/core';


// This directive is used inside the <mat-table> used in the Linguists page.
// It allows you to create a vertically-collapsible detail row, which becomes
// visible when you click on any row in the table.

@Directive({
	selector: '[collapsibleDetailRow]'
})
export class CollapsibleDetailRowDirective {


	private row: any;
	private tRef: TemplateRef<any>;
	private opened: boolean;


	@HostBinding('class.expanded')
	get expended(): boolean {
		return this.opened;
	}


	@Input()
	set collapsibleDetailRow(value: any) {
		if (value !== this.row) {
			this.row = value;
			// this.render();
		}
	}


	@Input('collapsibleDetailRowTpl')
	set template(value: TemplateRef<any>) {
		if (value !== this.tRef) {
			this.tRef = value;
		}
	}


	@Output() toggleChange = new EventEmitter<CollapsibleDetailRowDirective>();


	constructor(public vcRef: ViewContainerRef) {
	}


	@HostListener('click')
	onClick(): void {
		this.toggle();
	}


	toggle(): void {
		if (this.opened) {
			this.vcRef.clear();
		} else {
			this.render();
		}
		this.opened = this.vcRef.length > 0;
		this.toggleChange.emit(this);
	}


	private render(): void {
		this.vcRef.clear();
		if (this.tRef && this.row) {
			this.vcRef.createEmbeddedView(this.tRef, {$implicit: this.row});
		}
	}
}

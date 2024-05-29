import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-datagrid',
    templateUrl: './datagrid.component.html',
    standalone: true,
  imports: [TableModule, CommonModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    // styles: './datagrid.component.css'
})
export class DatagridComponent{
  @Input() Products: any[] = [];
  constructor() {
    console.log('constructor', this.Products);
  }
}
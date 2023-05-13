import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent, SideBarDef } from 'ag-grid-community';

declare var window: any;

@Component({
  selector: 'app-historial-acciones',
  templateUrl: './historial-acciones.component.html',
  styleUrls: ['./historial-acciones.component.css']
})
export class HistorialAccionesComponent  {


  private gridColumnApi!: any;

  public columnDefs: ColDef[] = [
    { field: 'athlete' },
    { field: 'age' },
    { field: 'country' },
    { field: 'sport' },
    { field: 'year' },
    { field: 'date' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
    width: 100,
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
  };
  public sideBar: SideBarDef | string | string[] | boolean | null = {
    toolPanels: ['columns'],
  };
  public rowGroupPanelShow: 'always' | 'onlyWhenGrouping' | 'never' = 'always';
  public pivotPanelShow: 'always' | 'onlyWhenPivoting' | 'never' = 'always';
  public rowData!: any[];

  constructor(private http: HttpClient) {}

  saveState() {
    window.colState = this.gridColumnApi.getColumnState();
    console.log('column state saved');
  }

  restoreState() {
    if (!window.colState) {
      console.log('no columns state to restore by, you must save state first');
      return;
    }
    this.gridColumnApi.applyColumnState({
      state: window.colState,
      applyOrder: true,
    });
    console.log('column state restored');
  }

  resetState() {
    this.gridColumnApi.resetColumnState();
    console.log('column state reset');
  }

  onGridReady(params: GridReadyEvent<any>) {
    this.gridColumnApi = params.columnApi;

    this.http
      .get<any[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => (this.rowData = data));
  }


}

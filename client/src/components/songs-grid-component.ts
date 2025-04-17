import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AgGridAngular } from "ag-grid-angular";
import { AgChartsEnterpriseModule } from "ag-charts-enterprise";
import {
  CellSelectionOptions,
  ClientSideRowModelModule,
  ColDef,
  ColGroupDef,
  DefaultMenuItem,
  GetContextMenuItems,
  GetContextMenuItemsParams,
  GridApi,
  GridOptions,
  GridReadyEvent,
  MenuItemDef,
  ModuleRegistry,
  ValidationModule,
} from "ag-grid-community";
import {
  CellSelectionModule,
  ClipboardModule,
  ColumnMenuModule,
  ContextMenuModule,
  ExcelExportModule,
  IntegratedChartsModule,
} from "ag-grid-enterprise";
import { ISong } from "../models/Song";
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ClipboardModule,
  ExcelExportModule,
  ColumnMenuModule,
  ContextMenuModule,
  CellSelectionModule,
  IntegratedChartsModule.with(AgChartsEnterpriseModule),
  ValidationModule /* Development Only */,
]);


@Component({
  selector: "songs-grid",
  standalone: true,
  imports: [AgGridAngular],
  template: `<ag-grid-angular
    style="width: 100%; height: 100%;"
    [columnDefs]="columnDefs"
    [defaultColDef]="defaultColDef"
    [cellSelection]="true"
    [allowContextMenuWithControlKey]="true"
    [getContextMenuItems]="getContextMenuItems"
    [rowData]="rowData"
    (gridReady)="onGridReady($event)"
  /> `,
})
export class SongsGridComponent {
  columnDefs: ColDef[] = [
    {
      "headerName": "",
      field: "play",
      cellRenderer: (params: any) => {
        const button = document.createElement("button");
        button.innerText = "▶️";
        button.style.cursor = "pointer";
        button.style.border = "none"; // Remove border
        button.style.background = "none"; // Remove background
        button.style.padding = "0"; // Remove padding
        button.style.fontSize = "16px"; // Adjust font size
        button.style.color = "#007bff"; // Optional: Add a color to match your theme
        button.addEventListener("mouseover", () => {
          button.style.color = "#0056b3"; // Optional: Hover effect
        });
        button.addEventListener("mouseout", () => {
          button.style.color = "#007bff"; // Reset color on mouse out
        });
        button.addEventListener("click", () => {
          console.log(`Playing song: ${params.data.title}`);
          // Add your play logic here
        });
        return button;
      },
      width: 100
    },
    { field: "title"},
    { field: "artist" },
    { field: "album" },
    { field: "dateAdded" },
    { field: "duration"}
  ];
  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
  };
  rowData!: ISong[];

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<ISong>) {
    this.rowData = [
      {
        title: "Song 1",
        artist: "Artist 1",
        album: 1,
        dateAdded: new Date("2023-01-01"),
        duration: "3:30",
      },
      {
        title: "Song 2",
        artist: "Artist 2",
        album: 2,
        dateAdded: new Date("2023-02-01"),
        duration: "4:00",
      },
      {
        title: "Song 3",
        artist: "Artist 3",
        album: 3,
        dateAdded: new Date("2023-03-01"),
        duration: "2:45",
      }
    ]
  }

  getContextMenuItems = (
    params: GetContextMenuItemsParams,
  ):
    | (DefaultMenuItem | MenuItemDef)[]
    | Promise<(DefaultMenuItem | MenuItemDef)[]> => {
    const result: (DefaultMenuItem | MenuItemDef)[] = [
      {
        // custom item
        name: "Add to playlist",
        action: () => {
          console.log("Adding " + params.value);
        }
      },
      {
        name: "Remove from this playlist",
        action: () => {
          console.log("Removing " + params.value);
        }
      },
      {
        name: "Go to artist",
        action: () => {
          console.log("Going to " + params.value);
        }
      },
      {
        name: "Share",
        action: () => {
          console.log("Sharing " + params.value);
        }
      }
    ]
    return result;
  };
}
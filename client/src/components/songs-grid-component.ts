import { Component } from "@angular/core";

import { AgGridAngular } from "ag-grid-angular";
import type { ColDef, ICellRendererParams } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

interface ISong {
    title: string;
    artist: string;
    album: number;
    dateAdded: Date;
    duration: string;
}

@Component({
    selector: "songs-grid-component",
    standalone: true,
    imports: [AgGridAngular],
    template: `
    <div class="content" style="width: 100%; height: 100%;">
      <!-- The AG Grid component, with Dimensions, CSS Theme, Row Data, and Column Definition -->
      <ag-grid-angular
        style="width: 100%; height: 100%;"
        [rowData]="rowData"
        [columnDefs]="colDefs"
        [defaultColDef]="defaultColDef"
      />
    </div>
    `
})
export class SongsGridComponent {
    rowData: ISong[] = [
        {title: "Song 1", artist: "Artist 1", album: 1, dateAdded: new Date(), duration: "3:45"},
        {title: "Song 2", artist: "Artist 2", album: 2, dateAdded: new Date(), duration: "4:20"},
        {title: "Song 3", artist: "Artist 3", album: 3, dateAdded: new Date(), duration: "2:50"},
        {title: "Song 4", artist: "Artist 4", album: 4, dateAdded: new Date(), duration: "5:10"},
        {title: "Song 5", artist: "Artist 5", album: 5, dateAdded: new Date(), duration: "3:30"},
      ];
    
      // Column Definitions: Defines & controls grid columns.
      colDefs: ColDef<ISong>[] = [
        {
          headerName: "",
          cellRenderer: (params: ICellRendererParams) => {
              const button = document.createElement("button");
              button.innerText = "▶";
              button.style.cursor = "pointer";
              button.style.border = "none"; // Remove border
              button.style.background = "transparent"; // Transparent background
              button.style.fontSize = "16px"; // Adjust font size
              button.style.padding = "0"; // Remove padding
              button.style.margin = "0";
              button.addEventListener("click", () => {
                  alert(`Playing: ${params.data.title}`);
              });
              return button;
          },
          width: 50,
          suppressSizeToFit: true,
        },
        { field: "title" },
        { field: "artist" },
        { field: "album" },
        { field: "dateAdded" },
        { field: "duration" },
      ];
    
      defaultColDef: ColDef = {
        flex: 1,
      };
}
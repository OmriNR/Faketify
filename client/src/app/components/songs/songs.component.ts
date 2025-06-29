import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
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

  GridReadyEvent,
  MenuItemDef,
  ModuleRegistry,
  RowClickedEvent,
  ValidationModule,
} from "ag-grid-community";
import {
  CellSelectionModule,
  ClipboardModule,
  ColumnMenuModule,
  ContextMenuModule,
  ExcelExportModule, GridOptions,
  IntegratedChartsModule,
} from "ag-grid-enterprise";
import { ISong } from "../../models/Song";
import { SongsService} from "../../services/SongsService";

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
  selector: 'songs-grid',
  imports: [AgGridAngular],
  providers: [SongsService],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.scss'
})
export class SongsComponent implements OnInit {

  @Input() songsIds: string[] = [];
  @Output() selectedSong = new EventEmitter<ISong>();

  rowData: ISong[] = [];

  constructor(private songsService: SongsService) {}

  ngOnInit() {
    this.songsService.getSongsByIds(this.songsIds).then(result => {
      this.rowData = result;
    });
  }

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
    { field: "name"},
    { field: "createdBy" },
    { field: "createdAt"}
  ];
  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
  };

  onRowClicked(event: RowClickedEvent): void {
    this.selectedSong.emit(event.data);
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
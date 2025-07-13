import { Component } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";
import { MatIconModule} from "@angular/material/icon";
import { MatButtonModule} from "@angular/material/button";
@Component({
  selector: 'app-search',
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchValue: string = '';

  clearSearch() {
    this.searchValue = '';
  }

}

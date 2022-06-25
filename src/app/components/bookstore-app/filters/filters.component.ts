import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output() filtro = new EventEmitter;
  rangeFilter = {
    from: 0,
    to: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  filterBooks() {
    if (this.rangeFilter.to < this.rangeFilter.from){
      this.rangeFilter.to = 0
      this.rangeFilter.from = 0

      return;
    }
    this.filtro.emit(this.rangeFilter);
  }

}

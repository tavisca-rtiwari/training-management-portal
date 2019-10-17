import { Component, OnInit ,Input} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mattable',
  templateUrl: './mattable.component.html',
  styleUrls: ['./mattable.component.css']
})
export class MattableComponent implements OnInit {
  @Input() gridData: any;
  @Input() columnHeader: any;
  dataSource: MatTableDataSource<any>;
  constructor() {
   }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.gridData);
    this.displayedColumns = this.columnHeader.map(c => c.columnDef);
  }
  displayedColumns;
}

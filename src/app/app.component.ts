import { Component,Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrainingManagementPortal';

   ELEMENT_DATA: any[] =  [
    {name:"Fresher's 2019",batch:2,status:"On Going",start:"15/10/2019",end:"15/11/2019" },
    {name:"Fresher's 2020",batch:2,status:"Yet Not Started",start:"15/10/2020",end:"15/11/2020" },
    {name:"Fresher's 2021",batch:2,status:"Yet Not Started",start:"15/10/2021",end:"15/11/2021" },
    {name:"Fresher's 2022",batch:2,status:"Yet Not Started",start:"15/10/2022",end:"15/11/2022" },
    {name:"Fresher's 2023",batch:2,status:"Yet Not Started",start:"15/10/2023",end:"15/11/2023" },
    {name:"Fresher's 2024",batch:2,status:"Yet Not Started",start:"15/10/2024",end:"15/11/2024" },
    {name:"Fresher's 2025",batch:2,status:"Yet Not Started",start:"15/10/2025",end:"15/11/2025" },
    {name:"Fresher's 2025",batch:2,status:"Yet Not Started",start:"15/10/2025",end:"15/11/2025" },
  ];

  columns = [
    { columnDef: 'name', header: 'Name',    cell: (element: any) => `${element.name}` },
    { columnDef: 'batch',     header: 'Batch',   cell: (element: any) => `${element.batch}`     },
    { columnDef: 'status',   header: 'Status', cell: (element: any) => `${element.status}`   },
    { columnDef: 'start',   header: 'Start', cell: (element: any) => `${element.start}`   },
    {columnDef: 'end',   header: 'End', cell: (element: any) => `${element.end}`   },
  ];

}

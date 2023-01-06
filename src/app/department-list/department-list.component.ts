import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
public selectedId:any;
departments=[
{"id":1,"name":"Angular"},
{"id":2,"name":"Node"},
];
  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(<any>params.get('id'));
      this.selectedId = id;
    
    } );
  }
  
  OnSelect(department:any){
 // this.router.navigate(['/departments',department.id]);
  this.router.navigate([department.id], { relativeTo: this.route });
  }
  
   isSelected(department:any) 
   { 
   return department.id === this.selectedId;
   }


}

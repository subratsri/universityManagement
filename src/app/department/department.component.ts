import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  department: any={
    name: "",
    deptNumber: ""
  };
  department1: any;
  flag: boolean;
  constructor() { }

  cancel(){
    this.flag=false;
  }
  edit(){
    
  /*this.department1 ={
    name: "",
    deptNumber: ""
  };
  this.http.post("REST API URI", this.department1)
  .subscribe(()=>{
      
    })
  */
    this.flag = true;
  }
  delete(){
    
  /*this.department1 ={
    name: "",
    deptNumber: ""
  };
  this.http.post("REST API URI", this.department1)
  .subscribe(()=>{
      
    })
  */
    //A delete request will be made to the back end server here
    alert("department deleted");
    document.location.href='http://localhost:4200/home';
  }
  update(){
    
  /*this.department1 ={
    name: "",
    deptNumber: ""
  };
  this.http.post("REST API URI", this.department1)
  .subscribe(()=>{
      
    })
  */
    //An update request to API will be made here
    alert("Updated");
    document.location.href="http://localhost:4200/home";
  }
  //the system will poplate the necessary variables with the user details after fetching it from some API
 
  ngOnInit() {
    this.department.name = "Test department";
    this.department.deptNumber = 7;
  }


}

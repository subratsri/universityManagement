import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { GetIdService } from '../get-id.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professor: any={
    email: "",
    name: "",
    department: "",
    birthDate: "",
    designation: ""
  };
  professor1: any;
  flag: boolean;
  constructor(obj: GetIdService) {
    //request to get user details based on his id
    //making an API call
  }
  cancel(){
    this.flag=false;
  }
  edit(){
    
  /*this.professor1 ={
    email: "",
    name: "",
    department: "",
    birthDate: "",
    designation: ""
  };
  this.http.post("REST API URI", this.professor1)
  .subscribe(()=>{
      
    })
  */
    this.flag = true;
  }
  delete(){
    
  /*this.professor1 ={
    email: "",
    name: "",
    department: "",
    birthDate: "",
    designation: ""
  };
  this.http.post("REST API URI", this.professor1)
  .subscribe(()=>{
      
    })
  */
    //A delete request will be made to the back end server here
    alert("Professor deleted");
    document.location.href='http://localhost:4200/home';
  }
  update(){
    
  /*this.professor1 ={
    email: "",
    name: "",
    department: "",
    birthDate: "",
    designation: ""
  };
  this.http.post("REST API URI", this.professor1)
  .subscribe(()=>{
      
    })
  */
    //An update request to API will be made here
    alert("Updated");
    document.location.href="http://localhost:4200/home";
  }
  //the system will poplate the necessary variables with the user details after fetching it from some API
  ngOnInit() {
    this.professor.email="Test@email.com";
    this.professor.name="Dr. Test Name";
    this.professor.department="Test Department";
    this.professor.birthDate="12 June 1990";
    this.professor.designation="Assistant Professor";
  }

}

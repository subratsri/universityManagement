import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: any={
    email: "",
    name: "",
    birthDate: "",
    designation: ""
  };
  subjects=[
    //hardcoded lets say there are 3 subjects per student
   new Subject('Physics','Dr. Test 1'),
   new Subject('Maths', 'Dr. Test 2'),
   new Subject('Chemmistry', 'Dr. Test 3') 
  ]
  student1: any;
  flag: boolean;
  constructor() { }
  edit(){
    
    /*this.student1 ={
      email: "",
      name: "",
      birthDate: "",
      designation: ""
    };
    this.http.post("REST API URI", this.student1)
    .subscribe(()=>{

    })
    */
      this.flag = true;
    }
    delete(){
      
    /*this.student1 ={
      email: "",
      name: ""
      birthDate: "",
      designation: ""
    };
    this.http.post("REST API URI", this.student1)
    .subscribe(()=>{
      
    })
    */
      //A delete request will be made to the back end server here
      alert("student deleted");
      document.location.href='http://localhost:4200/home';
    }
    update(){
      
    /*this.student1 ={
      email: "",
      name: "",
      birthDate: "",
      designation: ""
    };
    this.http.post("REST API URI", this.student1)
    .subscribe(()=>{
      
    })
    */
      //An update request to API will be made here
      alert("Updated");
      document.location.href="http://localhost:4200/home";
    }
    //the system will poplate the necessary variables with the user details after fetching it from some API
   cancel(){
     this.flag=false;
   }
  ngOnInit() {
    this.student.email="Test@email.com";
    this.student.name="Test Name";
    this.student.department="Test Department";
    this.student.birthDate="12 June 1990";
  }

}

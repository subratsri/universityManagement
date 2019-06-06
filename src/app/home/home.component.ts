import { Component, OnInit } from '@angular/core';
import { GetIdService } from '../get-id.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flag1: boolean;
  flag2: boolean;
  flag3: boolean;
  id: string;
  semail: string;
  pemail: string;
  did: string;
  b1: boolean;
  b2: boolean;
  b3: boolean;

  constructor(private obj: GetIdService) { }
  student(){
    this.flag2=false;
    this.flag3=false;
    this.flag1=true;
    this.id = this.semail;
  }
  getStudent(){
    this.obj.setId(this.id);
    document.location.href='http://localhost:4200/student';
  }
  createStudent(){
    //this will create a http request for creating a student
    this.b1=true;this.b2=false;this.b3=false;
  }
  createProfessor(){
    //this will create a http request for creating a professor
    this.b2=true;this.b1=false;this.b3=false;
  }
  createDepartment(){
    //this will create a http request for creating a new department
    this.b3=true;this.b2=false;this.b1=false;
  }
  cancel(){
    this.b1 = false;
    this.b2 = false;
    this.b3 = false;
  }
  sCreate(){
    //here an API will be called and create request will be done on the database
    alert("Student created");
    document.location.href='http://localhost:4200/home';
  }
  dCreate(){
    //here an API will be called and create request will be done on the database
    alert("Department created");
    document.location.href='http://localhost:4200/home';
  }
  pCreated(){
    //here an API will be called and create request will be done on the database
    alert("Professor created");
    document.location.href='http://localhost:4200/home';

  }

  professor(){
    this.flag1=false;
    this.flag3=false;
    this.flag2 = true;
    this.id = this.pemail;
  }
  getProfessor(){
    this.obj.setId(this.id);
    document.location.href='http://localhost:4200/professor';
  }
  department(){
    this.flag2=false;
    this.flag1=false;
    this.flag3 = true;
    this.id = this.did;
  }
  getDepartment(){
    this.obj.setId(this.id); 
    document.location.href='http://localhost:4200/department';
  }
  ngOnInit() {
  }

}

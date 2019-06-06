import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GetIdService {

  id: string;
  setId(id: string){
    console.log(this.id);
    this.id = id;
  }
  getId(){
    console.log(this.id);
    return this.id;
  }
  constructor() { }
}

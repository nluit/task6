import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public formedit:  any=[];
  
  title = 'task6';
  public list: any=[];  
  

  ongetData(value){

    this.list=value;

  }
  edit(i){
    this.formedit=this.list[i];
         
  }
  delete(i){
    this.list.splice(i,1);     
  }
}

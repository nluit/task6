import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output,EventEmitter ,Input} from '@angular/core';

@Component({
  selector: 'app-billing-adress',
  templateUrl: './billing-adress.component.html',
  styleUrls: ['./billing-adress.component.css']
})
export class BillingAdressComponent implements OnInit {

  @Input('formdata') formedit : any=[];
  @Output('data') SendData = new EventEmitter <any> ();

  public data: object ;
  public list: any=[];


  form = new FormGroup({

    firstname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastname: new FormControl('' ,[Validators.required,Validators.minLength(3)]),
    username: new FormControl('' ,Validators.required),
    address: new FormControl('' ,Validators.required ),
    address2: new FormControl('' ,Validators.required ),
    city: new FormControl('' ,Validators.required ),
    zip: new FormControl('' ,Validators.required ),  
    cardname : new FormControl('', Validators.required),
    cardnumber : new FormControl('', [Validators.required , Validators.pattern('[0-9]*')]),
    expiration : new FormControl('', [Validators.required]),
    CVV: new FormControl('', Validators.required),
    email: new FormControl(''),

  });   
  submit() {

    this.data = this.form.value;
    this.list.push(this.data);
    this.SendData.emit(this.list);  
    this.form.reset();
  }

  constructor() { }

  ngOnInit() {

  }

}

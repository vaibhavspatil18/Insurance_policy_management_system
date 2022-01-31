import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  newPolicyClicked = false;
  policies = [
    {number: 'PL2004', amount: '50000'},
    {number: 'PL2008', amount: '52000'},
    {number: 'PL2006', amount: '5000'}
  ];
  color:any;

  constructor() { }

  ngOnInit(): void {
  }

  model:any = {};
  model2:any = {};
  addPolicy(){
    this.policies.push(this.model);
    this.model = {}
  }

  deletePolicy(i:any){
    this.policies.splice(i);
    console.log(i)
  }

  myValue:any;

editPolicy(editPolicyInfo:any){
  this.model2.number = this.policies[editPolicyInfo].number;
  this.model2.amount = this.policies[editPolicyInfo].amount;
  this.myValue = editPolicyInfo;

}

updatePolicy(){
  let editPolicyInfo = this.myValue;
  for(let i = 0; i<this.policies.length; i++){
    if(i==editPolicyInfo){
      this.policies[i] = this.model2;
      this.model2 = {}
      }
    }
  }

  addNewPolicyBtn(){
    this.newPolicyClicked = !this.newPolicyClicked;
  }

  changeColorOne(){
    this.color = !this.color;
    if(this.color){
      return '#ffffff';
    }else {
      return '#f6f6f6';
    }
  }


}




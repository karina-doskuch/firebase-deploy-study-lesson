import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  name: AbstractControl;
  email: AbstractControl;
  mobile: AbstractControl;
  location: AbstractControl;

  constructor(public svc: CustomerService) { }

  ngOnInit(): void {
    this.createControls();
  }

  private createControls(): void {
    this.name = this.svc.form.controls.name;
    this.email = this.svc.form.controls.email;
    this.mobile = this.svc.form.controls.mobile;
    this.location = this.svc.form.controls.location;

    this.name.setValue('Jhon Smith');
    this.email.setValue('jhon@email.com');
    this.mobile.setValue('32345678');
    this.location.setValue('Some where');
  }

  onSubmit(): void {
    if (this.svc.form.valid) {
        this.svc.insertCustomer();
      }
    }
  }



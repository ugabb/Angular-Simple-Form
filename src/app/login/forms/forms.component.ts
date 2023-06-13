import { Component } from '@angular/core';

// forms
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {

  checkoutForm = this.formBuilder.group({
    email:'',
    password:''
  })

  constructor(private formBuilder: FormBuilder){}

  onSubmit(){
    console.warn("Credentials  submmited!", this.checkoutForm.value)
    this.checkoutForm.reset();
  }

}

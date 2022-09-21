import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  authorizationForm!: FormGroup;
  value = '';
  
  constructor() { }

  ngOnInit(): void {
    this.authorizationForm = new FormGroup({
      'user-email': new FormControl(null, [
                                            Validators.required, 
                                            Validators.email, 
                                            Validators.maxLength(30), 
                                            Validators.minLength(11)
                                          ]),
      'user-password': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9!_-]{8,20}$'), this.passwordStrength]),                                    
    })
  }

  passwordStrength(control: FormControl) {
    const hasUpperCase = /[A-Z]+/.test(control.value);

        const hasLowerCase = /[a-z]+/.test(control.value);

        const hasNumeric = /[0-9]+/.test(control.value);

        const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;
    if(!passwordValid) {
      return {passwordNotStrength: true }
    }
    return null;
  }

  onSubmit() {

  }
}

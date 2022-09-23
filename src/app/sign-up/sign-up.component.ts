import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ValidatorsService } from '../services/validators.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(  public authService: AuthService,
                private validatorsService: ValidatorsService ) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
        'user-email': new FormControl(null, [
                                              Validators.required, 
                                              Validators.email, 
                                              Validators.maxLength(30), 
                                              Validators.minLength(11)
                                            ]),
        'user-name': new FormControl(null, [Validators.required, 
                                            Validators.pattern('^[a-zA-Z0-9_-]{5,15}$')]),                                    
        'user-password': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9!_-]{8,20}$'), this.passwordStrength]), 
        'user-confirm-password': new FormControl(null, [Validators.required, 
                                                        Validators.pattern('^[a-zA-Z0-9!_-]{8,20}$')]),                                   
      },
      { validators: this.validatorsService.passwordMatch('user-password', 'user-confirm-password') }
    )
  }

  passwordStrength(control: FormControl) {
      const hasUpperCase = /[A-Z]+/.test(control.value);

      const hasLowerCase = /[a-z]+/.test(control.value);

      const hasNumeric = /[0-9]+/.test(control.value);

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

      if(!passwordValid) {
        return { passwordNotStrength: true }
    }
    return null;
  }

}

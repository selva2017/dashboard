import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    constructor(private authService: AuthService) { }

    ngOnInit() { }

    onTest(){
        console.log("on test")
    }

    onSignup(form: NgForm) {
        const email = form.value.email;
        console.log(email);
        const password = form.value.password;
        console.log(password);
        this.authService.signupUser(email, password);
      }
}

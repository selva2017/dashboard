import { FormsModule } from '@angular/forms';
// import { FormModule } from './../layout/form/form.module';
import { AuthService } from './../auth.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule
    ],
    providers: [AuthService],
    
    declarations: [LoginComponent]
})
export class LoginModule {
}

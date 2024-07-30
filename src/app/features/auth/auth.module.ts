import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../core/services/auth.service';
import {AuthMockService} from '../../core/services/auth-mock.service';
import { APP_CONFIG } from '../../core/injection-tokens';



@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    SharedModule
  ],
  providers: [
    AuthService,
    {
      provide: APP_CONFIG,
      useValue:{
        baseURL: '...',
        version: '2.0'
      }
    }
    /* {
      provide: AuthService,
      useClass: AuthMockService,
    } */
  ]
})
export class AuthModule { }

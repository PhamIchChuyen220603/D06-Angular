import { Component } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-angular';
  constructor(public auth: Auth, public authService: AuthService) {

  }
  ngOnInit(){
    onAuthStateChanged(this.auth,(user)=>{
      if(user){
        this.authService.currentUser = user;
        console.log(user);
      }
      else{
        console.log('no user');
        this.authService.currentUser = null;
      }
    })
  }
}

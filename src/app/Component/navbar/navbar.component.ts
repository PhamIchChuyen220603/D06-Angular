import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router, public cartSerVice: CartService, public auth: Auth, public authService: AuthService) {

  }

  navigateToHome() {
    this.router.navigate(['']);
  }

  navigateToNike() {
    this.router.navigate(['/nike']);
  }

  navigateToAdidas() {
    this.router.navigate(['/adidas']);
  }

  navigateToPuma() {
    this.router.navigate(['/puma']);
  }

  navigateToMizuno() {
    this.router.navigate(['/mizuno']);
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }

}

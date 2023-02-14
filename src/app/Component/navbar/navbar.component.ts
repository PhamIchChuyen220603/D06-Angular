import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router, public cartSerVice: CartService) {

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

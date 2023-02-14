import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-adidas',
  templateUrl: './adidas.component.html',
  styleUrls: ['./adidas.component.scss']
})
export class AdidasComponent {
  constructor(public cartService: CartService){}
}
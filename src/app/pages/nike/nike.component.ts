import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrls: ['./nike.component.scss']
})
export class NikeComponent {

  constructor(public cartService: CartService){}

}

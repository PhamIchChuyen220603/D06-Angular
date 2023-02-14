import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-puma',
  templateUrl: './puma.component.html',
  styleUrls: ['./puma.component.scss']
})
export class PumaComponent {

  constructor(public cartService: CartService){}
}

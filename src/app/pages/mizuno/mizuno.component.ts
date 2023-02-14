import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-mizuno',
  templateUrl: './mizuno.component.html',
  styleUrls: ['./mizuno.component.scss']
})
export class MizunoComponent {
  constructor(public cartService: CartService){}
}

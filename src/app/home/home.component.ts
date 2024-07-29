import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Interface } from 'readline';




interface IProduct{
  name:string;
  price:number;
  onSale:boolean;
  imageUrl:string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  proName:string="";
  products:IProduct[]=
  [
    {name:"Samsung",price:1000,onSale:true,imageUrl:"./assets/images/tv.jpeg"},
    {name:"HTC",price:2000,onSale:false,imageUrl:"./assets/images/screen.jpg"},
    {name:"DELL",price:3000,onSale:true,imageUrl:"./assets/images/laptop.webp"},
    {name:"HP",price:3000,onSale:false,imageUrl:"./assets/images/mobile.avif"}
  ]

}




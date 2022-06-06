import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-static-owl',
  templateUrl: './static-owl.component.html',
  styleUrls: ['./static-owl.component.scss']
})
export class StaticOwlComponent implements OnInit {

public slidesStore = [
  {
  id: '1',  
  src:'/assets/images/casaGrande.PNG',
  alt:'casaGrande',
  title:'casaGrande'
},
{
  id: '2',  
  src:'/assets/images/casaPequeña.PNG',
  alt:'casaPequeña',
  title:'casaPequeña'
}
]
  public number: any;
  public currentSlide: any;
  customOptions: OwlOptions = {
    autoHeight: true,
    autoWidth: false,
    center: false,
    dots: true,
    loop: false,
    lazyLoad: true,
    margin: 0,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  }


  selectedItem: number;
  constructor() {
    this.selectedItem = 1;
    this.currentSlide = 1;

  }

  ngOnInit(): void {


  }



  public desplaza(item: any) {
    this.currentSlide = item.data.startPosition;
  }


}

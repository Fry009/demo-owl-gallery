import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { OwlServiceService } from '../../services/owl-service.service';

@Component({
  selector: 'app-dinamic-owl',
  templateUrl: './dinamic-owl.component.html',
  styleUrls: ['./dinamic-owl.component.scss']
})
export class DinamicOwlComponent implements OnInit {


  public slidesStore : any[]
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
    constructor(private owlService: OwlServiceService) {
      this.selectedItem = 1;
      this.currentSlide = 1;
      this.slidesStore = [
        {
          id: '2',  
          src:'/assets/images/casaPequeña.PNG',
          alt:'casaPequeña',
          title:'casaPequeña'
        }
      ];
  
    }
  
    ngOnInit(): void {
      this.owlService.getPhotoAlbum().subscribe(data =>{
        data.data.imagenes.forEach((photoItem:any) => {
          let item = {
            id:photoItem.FkPropiedad,
            alt:photoItem.FkPropiedad,
            title: photoItem.FkPropiedad,
            src: photoItem.Uri
          }
          this.slidesStore.push(item);
        })
        this.owlService.getPhotoAlbum2().subscribe(data =>{
          debugger;
          data.data.imagenes.forEach((photoItem:any) => {
            let item = {
              id:photoItem.FkPropiedad,
              alt:photoItem.FkPropiedad,
              title: photoItem.FkPropiedad,
              src: photoItem.Uri
            }
            this.slidesStore.push(item);
          })
        })
      })
    }
  
  
  
    public desplaza(item: any) {
      this.currentSlide = item.data.startPosition;
    }
  
  
}

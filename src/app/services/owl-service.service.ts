import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwlServiceService {

  private readonly baseUrl = 'https://picsum.photos/';

  constructor(private readonly http: HttpClient) { }

   /**
   * Requests an image given an specific index with 300width
   */
    public getPhotoAlbum(): Observable<any> {
      return this.http.get('https://web4des.alisedainmobiliaria.com/aliseda-api/public/api/promociones/p1447', {});
    }

    public getPhotoAlbum2(): Observable<any> {
      return this.http.get('https://web4des.alisedainmobiliaria.com/aliseda-api/public/api/propiedades/CAN0000149669', {});
    }
}

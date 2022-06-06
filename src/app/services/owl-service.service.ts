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
      return this.http.get('https://web4des.alisedainmobiliaria.com/aliseda-api/public/api/promociones/p244', {});
    }
}

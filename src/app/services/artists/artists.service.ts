import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  ids= "2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6,0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin";

  httpHeaders: any = {
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer'+API_KEY,
      }
  }

  constructor( public http: HttpClient ) { }

  getArtists(): Observable<any>{
    return this.http.get("https://api.spotify.com/v1/artists?ids="+ this.ids, this.httpHeaders);
  }
}

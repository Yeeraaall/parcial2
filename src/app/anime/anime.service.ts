import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private apiUrl = environment.baseUrl + 'series.json';


  constructor(private http: HttpClient) 
  { }



  getAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.apiUrl);
  }


}

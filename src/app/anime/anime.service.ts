import { Injectable } from '@angular/core';

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

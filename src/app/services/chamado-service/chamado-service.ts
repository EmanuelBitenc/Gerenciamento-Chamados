import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chamado } from '../../model/chamado';

@Injectable({
  providedIn: 'root',
})
export class ChamadoService {
  private apiUrl = 'https://emanuelbitenc.github.io/ImagesProject/datamock.json';

  constructor(private http: HttpClient) {}

  getChamados(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(this.apiUrl);
  }
}

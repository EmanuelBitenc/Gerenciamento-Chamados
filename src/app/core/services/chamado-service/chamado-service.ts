import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Chamado } from '../../model/chamado';

@Injectable({
  providedIn: 'root',
})
export class ChamadoService {
  private apiUrl = 'https://emanuelbitenc.github.io/ImagesProject/datamock.json';
  private localStorageKey = 'chamados-locais';
  private platformId = inject(PLATFORM_ID);
  private isBrowser: boolean;

  constructor(private http: HttpClient) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  getChamados(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(this.apiUrl).pipe(
      map((chamadosApi: Chamado[]) => {
        const chamadosLocal = this.getChamadosLocalStorage();
        return [...chamadosLocal, ...chamadosApi];
      })
    );
  }

  salvarChamado(novoChamado: Chamado): void {
    if (!this.isBrowser) return;

    const chamadosLocal = this.getChamadosLocalStorage();

    const novoId = this.gerarNovoId(chamadosLocal);
    const chamadoComId = { ...novoChamado, id: novoId };

    chamadosLocal.push(chamadoComId);
    localStorage.setItem(this.localStorageKey, JSON.stringify(chamadosLocal));
  }

  private getChamadosLocalStorage(): Chamado[] {
    if (!this.isBrowser) return [];

    const chamadosString = localStorage.getItem(this.localStorageKey);
    return chamadosString ? JSON.parse(chamadosString) : [];
  }

  private gerarNovoId(chamadosExistentes: Chamado[]): number {
    if (chamadosExistentes.length === 0) {
      return 7;
    }
    const maiorId = Math.max(...chamadosExistentes.map((c) => c.id));
    return maiorId + 1;
  }

  /** Não sendo usado
  removerChamado(id: number): void {
    if (!this.isBrowser) return;

    let chamadosLocal = this.getChamadosLocalStorage();
    chamadosLocal = chamadosLocal.filter((c) => c.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(chamadosLocal));
  }

  limparChamadosLocais(): void {
    if (!this.isBrowser) return;

    localStorage.removeItem(this.localStorageKey);
  } */
}

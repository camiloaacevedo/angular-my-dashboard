import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importa HttpHeaders
import { computed, inject, Injectable, signal } from '@angular/core';

import { User, UsersResponse } from '@interfaces/req-response';
import { delay } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: [],
  });


  public users = computed( () => this.#state().users );
  public loading = computed( () => this.#state().loading );


  constructor() {
    // Define las cabeceras, incluyendo tu API Key
    const headers = new HttpHeaders({
      'x-api-key': 'reqres-free-v1' // La clave que encontraste
    });

    this.http
      .get<UsersResponse>('https://reqres.in/api/users', { headers }) // Pasa las cabeceras aquí
      .pipe(delay(1500))
      .subscribe((res) => {
        this.#state.set({
          loading: false,
          users: res.data,
        });
      });
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(private httpClient: HttpClient) {}

  get status$(): Observable<number> {
    return this.httpClient
      .get<{ processed: number }>(`http://localhost:3000/fetch`)
      .pipe(map((response) => response.processed));
  }
}

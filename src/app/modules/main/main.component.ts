import { Component, OnInit } from '@angular/core';
import { Observable, interval, switchMap, takeWhile } from 'rxjs';
import { FetchService } from './services/fetch-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  status$: Observable<number> | null = null;

  constructor(private fetchService: FetchService) {}

  ngOnInit(): void {
    this.status$ = interval(500).pipe(
      switchMap(() => this.fetchService.status$),
      takeWhile((result) => result != 100, true),
    );
  }
}

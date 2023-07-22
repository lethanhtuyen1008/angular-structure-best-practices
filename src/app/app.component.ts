import { Component, OnInit } from '@angular/core';

import { LoadingService } from './shared/components/backdrop/loading-backdrop.component.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private loadingSubscription: Subscription | any;
  isLoading: boolean = false;

  constructor(private loadingService: LoadingService) {
    this.loadingSubscription = this.loadingService
      .getIsLoading()
      .subscribe((isLoading: boolean) => {
        this.isLoading = isLoading;
      });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}

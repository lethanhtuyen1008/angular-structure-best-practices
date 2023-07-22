import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private isLoadingSubject: Subject<boolean> = new Subject<boolean>();

  show() {
    this.isLoadingSubject.next(true);
  }

  hide() {
    this.isLoadingSubject.next(false);
  }

  getIsLoading(): Subject<boolean> {
    return this.isLoadingSubject;
  }
}

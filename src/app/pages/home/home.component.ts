import { LoadingService } from '@/app/shared/components/backdrop/loading-backdrop.component.service';
import { ToastService, ToastType } from '@/app/shared/components/toast/toast.component.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    public toastService: ToastService,
    private loadingService: LoadingService,
    private activatedRoute: ActivatedRoute,
  ) {}

  async ngOnInit() {
    const data = await firstValueFrom(this.activatedRoute.data);
    console.log(data);
  }

  show(type: ToastType) {
    this.toastService.show(
      'MUI offers a comprehensive suite of UI tools to help you ship new features faster.',
      {
        animation: true,
        type: type,
        delay: 15000000000000,
      },
    );
  }

  remove() {
    this.toastService.clear();
  }

  showLoading() {
    this.loadingService.show();
  }
}

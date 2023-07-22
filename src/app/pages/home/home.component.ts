import { ProfilesService } from '@/app/core';
import { ToastService, ToastType } from '@/app/shared/components/toast/toast.component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentRate = 8;

  constructor(private profilesService: ProfilesService, public toastService: ToastService) {}

  ngOnInit() {
    this.profilesService.get('tuyenllt');
  }

  show(type: ToastType) {
    this.toastService.show('I am a standard toast', {
      animation: true,
      type: type,
    });
  }
  removeStandard() {
    this.toastService.clear();
  }
}

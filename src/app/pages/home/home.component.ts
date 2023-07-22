import { ProfilesService } from '@/app/core';
import { ToastService } from '@/app/shared/components/toast/toast-service';
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

  showStandard() {
    this.toastService.show('I am a standard toast');
  }
}

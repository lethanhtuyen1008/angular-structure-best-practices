import { ProfilesService } from '@/app/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentRate = 8;

  constructor(private profilesService: ProfilesService) {}

  ngOnInit() {
    this.profilesService.get('tuyenllt').subscribe(() => {});
  }
}

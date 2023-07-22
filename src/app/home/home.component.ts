import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private profilesService: ProfilesService) {}

  tags: Array<string> = [];
  tagsLoaded = false;

  ngOnInit() {
    this.profilesService.get('tuyenllt').subscribe(() => {});
  }
}

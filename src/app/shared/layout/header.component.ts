import { Component, OnInit } from '@angular/core';

import { User, UserService } from '../../core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService) {}

  currentUser: User = {
    bio: '',
    email: '',
    image: '',
    token: '',
    username: '',
  };

  ngOnInit() {
    this.userService.currentUser.subscribe((userData) => {
      this.currentUser = userData;
    });
  }
}

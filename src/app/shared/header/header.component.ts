import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { userService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private userService: userService) {}

  ngOnInit(): void {
    this.userService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
      console.log('Is logged in:', status);
    });
  }
}

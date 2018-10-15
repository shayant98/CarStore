import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  isLoggedIn: boolean
  loggedInUser: string

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true
        this.loggedInUser = auth.email
      } else {
        this.isLoggedIn = false
      }
    })
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}

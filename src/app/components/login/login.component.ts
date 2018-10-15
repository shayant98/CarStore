import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string
  password: string
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        console.log(auth.email);

        this.router.navigate(['/'])

      } else {
        console.log('not logged in');

      }
    })
  }

  onSubmit() {
    this.authService.login(this.email, this.password).then(res => {
      console.log('U are Logged In');
      this.router.navigate(['/'])
    })
      .catch(err => {
        console.log(err);
      })


  }



}

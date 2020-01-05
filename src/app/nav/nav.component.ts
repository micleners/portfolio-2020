import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isHomeRoute: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isHomeRoute = this.router.url === '/';
    console.log(this.router.url);
    console.log(this.isHomeRoute);
  }
}

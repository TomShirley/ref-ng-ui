import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-app-splashpage',
  templateUrl: './default-app-splashpage.component.html',
  styleUrls: ['./default-app-splashpage.component.scss']
})
export class DefaultAppSplashpageComponent implements OnInit {
  title = 'ng-ref-microsite';
  
  constructor() { }

  ngOnInit(): void {
  }

}

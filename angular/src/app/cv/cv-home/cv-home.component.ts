import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { routerAnimation } from '../../common/animation';

@Component({
  selector: 'app-cv-home',
  templateUrl: './cv-home.component.html',
  styleUrls: ['./cv-home.component.css'],
  animations: [routerAnimation()],
})
export class CvHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getRouteAnimation(outlet: RouterOutlet) {
    const res =
      outlet.activatedRouteData.num === undefined
        ? -1
        : outlet.activatedRouteData.num;

    return res;
  }

}

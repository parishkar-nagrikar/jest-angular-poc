import { Component } from '@angular/core';

@Component({
  selector: 'app-matchers',
  templateUrl: './matchers.component.html',
  styleUrls: ['./matchers.component.css']
})
export class MatchersComponent {

  constructor() {
  }
  ngOnInit(): void {
  }
  
  compileExceptionCode() {
    throw new Error('you are using Old Angular');
  }
}
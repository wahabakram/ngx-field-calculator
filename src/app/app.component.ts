import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-field-calculator-demo';
  value: string = '10'

  calculateValue() {
    console.log(this.value)
  }
}

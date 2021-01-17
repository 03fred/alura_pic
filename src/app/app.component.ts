import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photos = [
    {
      url : 'https://d168rbuicf8uyi.cloudfront.net/wp-content/uploads/2019/06/13145802/sonhar-com-leao-1024x649.jpg',
      description : 'Lion'
    }
  ]

}

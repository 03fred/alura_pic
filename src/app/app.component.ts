import { Component } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor(http:HttpClient){
    
  }

}

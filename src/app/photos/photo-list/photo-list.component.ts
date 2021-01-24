import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: any[] = [];
  filter: string = '';

  constructor(private activitedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.photos = this.activitedRoute.snapshot.data.photos;
  }

}

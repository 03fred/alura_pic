import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-photo',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {

    //inbobund property
    @Input() description = '';
    @Input() url =  '';
    @Input()  title = 'alurapic';
}
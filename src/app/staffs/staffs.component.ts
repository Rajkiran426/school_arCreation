import { Component } from '@angular/core';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.scss']
})
export class StaffsComponent {
  images1 = [
    { url: 'assets/images/pic1.jpeg', title: 'Name', description: 'About' },
    { url: 'image2.jpg', title: 'Image 2', description: 'Description for Image 2' },
    { url: 'image3.jpg', title: 'Image 3', description: 'Description for Image 3' },
  ];
  images2 = [
    { url: 'image1.jpg', title: 'Image 1', description: 'Description for Image 1' },
    { url: 'image2.jpg', title: 'Image 2', description: 'Description for Image 2' },
    { url: 'image3.jpg', title: 'Image 3', description: 'Description for Image 3' },
  ];

}

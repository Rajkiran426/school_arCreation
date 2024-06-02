import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  images1 = [
    { url: 'assets/smartClass/Computer1.jpg', title: 'कंप्यूटर कक्ष', description: 'कंप्यूटर की शिक्षा देते हुए शिक्षक.' },
    { url: 'assets/smartClass/Projector1.jpg', title: 'प्रोजेक्टर कक्ष', description: 'प्रोजेक्टर पर शिक्षा देते हुए शिक्षक.' },
    { url: 'image3.jpg', title: 'Image 3', description: 'Description for Image 3' },
    { url: 'image4.jpg', title: 'Image 4', description: 'Description for Image 4' },
  ];
  images2 = [
    { url: 'assets/images/pic1.jpeg', title: 'Name', description: 'About' },
    { url: 'image2.jpg', title: 'Image 2', description: 'Description for Image 2' },
    { url: 'image3.jpg', title: 'Image 3', description: 'Description for Image 3' },
    { url: 'image4.jpg', title: 'Image 4', description: 'Description for Image 4' },
  ];
  library = [
    { url: 'assets/library/lib1.jpg', title: 'Name', description: 'About' },
    // { url: 'image2.jpg', title: 'Image 2', description: 'Description for Image 2' },
    // { url: 'image3.jpg', title: 'Image 3', description: 'Description for Image 3' },
    // { url: 'image4.jpg', title: 'Image 4', description: 'Description for Image 4' },
  ];
}

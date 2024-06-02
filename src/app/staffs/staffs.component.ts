import { Component } from '@angular/core';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.scss']
})
export class StaffsComponent {
  images1 = [
    { url: 'assets/images/pic1.jpeg', title: 'श्री राजेश कुमार पटेल',  duration: '14-09-2010 से अब तक', description: 'राज्य शिक्षक पुरस्कार 2019' },
    { url: 'assets/images/pic1.jpeg', title: 'श्री रामनिहोर सिंह', duration: '15-03-2007 से 14-09-2010' },
    { url: 'assets/images/pic1.jpeg', title: 'श्री रामजतन पाण्डेय', duration: '29-09-2001 से 02-03-2007' },
    { url: 'assets/images/pic1.jpeg', title: 'श्री कृष्णदेव सिंह', duration: '10-07-1992 से 28-09-2001' },
    { url: 'assets/images/pic1.jpeg', title: 'श्री शिवधार सिंह', duration: '08-07-1981 से 30-06-1992' },
    { url: 'assets/images/pic1.jpeg', title: 'श्री लालजी सिंह', duration: '04-09-1979 से 01-06-1981' },
    { url: 'assets/images/pic1.jpeg', title: 'श्री विभूति नारायण सिंह', duration: '24-09-1974 से 03-09-1979' },
    { url: 'assets/images/pic1.jpeg', title: ' श्री लालजी सिंह', duration: '18-07-1970 से 24-09-1974' },
    { url: 'assets/images/pic1.jpeg', title: 'श्री रामअधार द्विवेदी', duration: '15-07-1965 से 17-07-1970' },
    { url: 'assets/images/pic1.jpeg', title: 'श्री रामनिहोर सिंह', duration: '15-08-1962 से 14-07-1965' },
  ];
  images2 = [
    { url: 'image1.jpg', title: 'Image 1', duration: 'Description for Image 1' },
    { url: 'image2.jpg', title: 'Image 2', duration: 'Description for Image 2' },
    { url: 'image3.jpg', title: 'Image 3', duration: 'Description for Image 3' },
    { url: 'image4.jpg', title: 'Image 4', duration: 'Description for Image 4' },
  ];

}

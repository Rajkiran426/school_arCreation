import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  classImages = [
    { url: 'assets/smartClass/computer1.jpg',  title: 'कंप्यूटर कक्ष', description: 'कम्प्यूटर शिक्षा प्राप्त करते प्रा0वि0 चकिया के बच्चें' },
    { url: 'assets/smartClass/projector1.jpg', title: 'प्रोजेक्टर कक्ष', description: 'प्रोजेक्टर प्राप्त करते प्रा0वि0 चकिया के बच्चें' },
    { url: 'assets/smartClass/computer2.jpeg', title: 'कंप्यूटर कक्ष', description: 'कम्प्यूटर शिक्षा प्राप्त करते प्रा0वि0 चकिया के बच्चें' }
  ];
  library = [
    { url: 'assets/library/lib1.jpg', title: 'Name', description: 'About' },
    // { url: 'image2.jpg', title: 'Image 2', description: 'Description for Image 2' },
    // { url: 'image3.jpg', title: 'Image 3', description: 'Description for Image 3' },
    // { url: 'image4.jpg', title: 'Image 4', description: 'Description for Image 4' },
  ];
  prizePics = [
    { url: 'assets/prizePics/courtesy.jpeg',  title: 'Image 1', description: 'केन्द्रीय स्वाथ्य एवं परिवार कल्याण राज्य मंत्री श्रीमती अनुप्रिया पटेल प्र0अ0 श्री राजेश कुमार पटेल को सम्मानित करते हुए' },
    { url: 'assets/prizePics/prizePic1.jpeg', title: 'Image 2', description: 'जिला स्तरीय वन विभाग द्वारा आयोजित जिला स्तरीय दक्षता प्रतियोगिता में प्रथम स्थान प्राप्त किये हुए प्रा0वि0 चकिया प्रथम के बच्चों को जिला अध्यक्ष श्रीमती सरिता सिंह द्वारा पुरस्कार प्रदत्त करते हुए' },
    { url: 'assets/prizePics/prizePic2.jpeg', title: 'Image 3', description: 'श्री रवि शर्मा प्रमा ज्योति फाउंडेशन के चेयरमैन व मिशन चेतना नई दिल्ली के संस्थापक द्वारा अभिभावक संगोष्ठी में प्रा0 वि0 चकिया प्रथम के बच्चों को पुरस्कृत करते हुए' },
    { url: 'assets/prizePics/prizePic3.jpeg', title: 'Image 4', description: 'जनपदीय बाल क्रीडा प्रतियोगिता में प्र0अ0 श्री राजेश कुमार पटेल को सम्मानित करते हुए जिला बेसिक शिक्षा अधिकारी सुश्री चन्दना राम इकबाल यादव' },
    { url: 'assets/prizePics/prizePic4.jpeg', title: 'Image 4', description: 'विद्यालय परिषर में बच्चों को टाई बेल्ट वितरित करते हुए जिला बेसिक शिक्षा अधिकारी श्री भोलेन्द्र प्रताप सिंह' },
    { url: 'assets/prizePics/prizePic5.jpeg', title: 'Image 5', description: 'जनपदीय बाल क्रीडा प्रतियोगिता में विशेष प्रदर्शन में पुरस्कृत बच्चे प्र0अ0 के साथ' },
  ];
  mixedPics = [
    { url: 'assets/mixedPhotos/pic1.jpeg', title: 'Image 1', description: 'Loading' },
    { url: 'assets/mixedPhotos/pic2.jpeg', title: 'Image 2', description: 'विद्यालय परिसर में खेल का आनन्द उठाते हुए बच्चें' },
    { url: 'assets/mixedPhotos/pic3.jpeg', title: 'Image 3', description: 'अभ्यारण लखनउ भ्रमण  बच्चों के साथ अध्यापकगण' },
    { url: 'assets/mixedPhotos/pic4.jpeg', title: 'Image 4', description: 'अमृत महोत्सव रैली का नेतृत्व करते हुए श्री कैलाश आचार्य विधायक चकिया के साथ बच्चे व अध्यापक'},
    { url: 'assets/mixedPhotos/pic5.jpeg', title: 'Image 5', description: 'प्रादेशिक रैली में प्रतिभाग करते बच्चें' },
    { url: 'assets/mixedPhotos/pic6.jpeg', title: 'Image 6', description: 'खेल खेल में शिक्षा ग्रहण करते बच्चें' },
    { url: 'assets/mixedPhotos/pic7.jpeg', title: 'Image 7', description: 'भारत स्काउट गाइड व कब-बुलबुल कार्यक्रम में प्रतिभाग करते बच्चें' },
    { url: 'assets/mixedPhotos/pic8.jpeg', title: 'Image 8', description: 'अभ्यारण लखनउ भ्रमण में झूला का आनन्द उठाते हुए बच्चें' },  
  ];
  videos = [
    { url: 'assets/Videos/video1.mp4', title: 'Video 1', description: 'स्वागत गीत भुड़कुड़ा' },
    { url: 'assets/Videos/video2.mp4', title: 'Video 2', description: 'वानिकी कार्यक्रम के अवसर पर सास्कृतिक में प्रतिभाग करते हुए प्रा0वि0 चकिया प्रथम जनपद चन्दौली के बच्चें' },
    { url: 'assets/Videos/video3.mp4', title: 'Video 3', description: 'Description for Image 3' },
    { url: 'assets/Videos/video4.mp4', title: 'Video 4', description: 'Description for Image 4' },
    { url: 'assets/Videos/video5.mp4', title: 'Video 5', description: 'एक पेड़ माॅ के नाम वानिकी कार्यक्रम के अवसर पर प्रद्रर्शन  करते  प्रा0वि0 चकिया प्रथम  व उच्च प्राथमिक विद्यालय चकिया  जनपद चन्दौली के बच्चें' },
    { url: 'assets/Videos/video6.mp4', title: 'Video 6', description: 'Description for Image 4' },
    { url: 'assets/Videos/video7.mp4', title: 'Video 7', description: 'ए वानिकी कार्यक्रम के  वन मंत्री बिहार सरकार को ससम्मान मंच तक ले जाते हुए कब-बुलबुल व स्काउटगाइड की अवसर पर प्रद्रर्शन  करते  प्रा0वि0 चकिया प्रथम  व उच्च प्राथमिक विद्यालय चकिया  जनपद चन्दौली उत्तर प्रदेश के बच्चें' }
  ];
 
}

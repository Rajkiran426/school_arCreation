import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StaffsComponent } from './staffs/staffs.component';
import { StudentComponent } from './student/student.component';
import { PhotosComponent } from './photos/photos.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"staffs",component:StaffsComponent},
  {path:"student",component:StudentComponent},
  {path:"photos",component:PhotosComponent},
  {path:"contacts",component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

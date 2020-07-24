import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/shared/services/courses.service';
import { Course } from 'src/app/shared/models/course';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private courseService: CoursesService
  ) { }
  public courses : Course[] = [];
  public categories: Category[] = [];

  ngOnInit() {
      this.courseService.getAllCourses().subscribe(
        (res: any) => {

          this.courses = JSON.parse(res.payload);
          console.log(this.courses);
      });
      this.courseService.getAllCategory().subscribe(
        (response: any) => {
          var cat = JSON.parse(response.payload);
          cat.forEach((element) => {
            this.categories.push(element);
          });
          console.log(this.categories);
      });
  }
  
  public changECategory = (data: string) => {
    console.log(data);
  }

}

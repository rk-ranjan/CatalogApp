import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/shared/services/courses.service';
import { Course } from 'src/app/shared/models/course';
import { Category } from 'src/app/shared/models/category';
import { element } from 'protractor';

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
  public tempCourses: Course[] = [];
  public myRadio: string = 'all';
  ngOnInit() {
      this.courseService.getAllCourses().subscribe(
        (res: any) => {
          this.courses = JSON.parse(res.payload);
          this.tempCourses =  this.courses;
      });
      this.courseService.getAllCategory().subscribe(
        (response: any) => {
          var cat = JSON.parse(response.payload);
          cat.forEach((element) => {
            this.categories.push(element);
          });
      });      
  }
  
  public changeCategory = (data: string) => {
     this.myRadio = data;
     this.filterByCourse(this.myRadio);
  }

  public filterByCourse = (courseName: string) => {
     if(courseName === 'all') {
       this.tempCourses = this.courses;
     } else {
        var temp: any[] = [];
        this.courses.forEach((elem) => {
            if(elem.category === courseName) {
              temp.push(elem);
            }
        });
        this.tempCourses = [...temp];
     }
  }
  public filterCourse = (inputText: string) => {
    //  this.filterByCourse(this.myRadio);
     this.tempCourses = [...inputText ? this.filterSingleItem(inputText) : this.filterWithNoSearchText(this.myRadio)];
  }
  public filterSingleItem = (text: string) => {
    let filterArray 
    if(this.myRadio !== 'all') {
      filterArray= this.courses.filter((singleItem) => singleItem.instructor_name.toLowerCase().indexOf(text.toLowerCase())  > -1 && singleItem.category === this.myRadio); 
    } else {
      filterArray= this.courses.filter((singleItem) => singleItem.instructor_name.toLowerCase().indexOf(text.toLowerCase())  > -1); 
    }
    return filterArray;
  }

  public filterWithNoSearchText = (courseName: string) => {
    var courseByCat: any[] = [];
    if(courseName === 'all') {
      courseByCat = this.courses;
    } else {
       var temp: any[] = [];
       this.courses.forEach((elem) => {
           if(elem.category === courseName) {
             temp.push(elem);
           }
       });
       courseByCat = [...temp];
    }
    return courseByCat;
  }
}

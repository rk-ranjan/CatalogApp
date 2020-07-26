import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() public course: Course;
  public currentStatus: string = '';
  public weeks: number;
  constructor() { }

  ngOnInit() {    
     this.findWeeks(this.course.start_date, this.course.end_date);
     this.findCurrentStatus(this.course.start_date, this.course.end_date);
  }
  findCurrentStatus(start_date: string, end_date: string) {
    var date1 = new Date(start_date).getTime();
    var date2 = new Date(end_date).getTime();
    var date3 = new Date().getTime();
    if(date1 > date3) {
      this.currentStatus = 'Pre-registration';
    }
    if(date3 > date1 && date3 < date2) {
        this.currentStatus = 'Ongoing';
    } 
    if(date3 > date2) {
      this.currentStatus = 'Completed';
    }
  }
  findWeeks(start_date: string, end_date: string) {
    var date1 = new Date(start_date).getTime();
    var date2 = new Date(end_date).getTime();
    this.weeks = date2 - date1;
    this.weeks = (this.weeks)/(1000*3600*24*7);
  }

}

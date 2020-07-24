import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() public course: Course;
  constructor() { }

  ngOnInit() {
  }

}

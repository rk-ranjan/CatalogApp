import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public secretKey: string = "?secret=HelloMars"
  public allCategoryUrl: string = "all_categories"+this.secretKey;
  public allCoursesUrl: string = "all_courses"+this.secretKey;
  public header = new HttpHeaders();


  constructor(
    private http: HttpClient,
  
  ) {
     this.header.append('Content-Type', 'application/x-www-form-urlencoded');
   }

  /**.
   * 
   * 
  */
  public getAllCourses = (): Observable<Course[]> => {
    return this.http.get<Course[]>(this.allCoursesUrl, {headers: this.header,}).pipe(
      map((res: Course[]) => {
        return res;
      })
    );
  }

  /**.
   * 
   * 
  */
  public getAllCategory = (): Observable<any> => {
  return this.http.get<any>(this.allCategoryUrl).pipe(
    map((res: any[]) => {
      return res;
    })
  );
}
  
}

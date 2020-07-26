import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../models/course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  // public baseUrl: string = environment.baseUrl;
  public secretKey: string = "?secret=HelloMars"
  public allCategoryUrl: string ="all_categories"+this.secretKey;
  public allCoursesUrl: string = "all_courses"+this.secretKey;

  constructor(
    private http: HttpClient,
  
  ) {

   }

  /**.
   * 
   * 
  */
  public getAllCourses = (): Observable<Course[]> => {
    return this.http.get<Course[]>(this.allCoursesUrl).pipe(
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

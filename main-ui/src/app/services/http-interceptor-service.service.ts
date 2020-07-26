import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorServiceService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const baseUrl = environment.baseUrl;
      const corsHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Headers': 'origin,x-requested-with, content-type, accept',
        'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept",
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT'

      });
      const headerConfig = {};
            headerConfig['Access-Control-Allow-Origin'] = '*';
            headerConfig['Access-Control-Request-Headers'] = 'origin,x-requested-with, content-type, accept';
            headerConfig['Access-Control-Allow-Headers'] = "Origin, X-Requested-With, Content-Type, Accept";
            headerConfig['Access-Control-Allow-Methods'] = "GET, POST, DELETE, PUT";
            headerConfig['Content-Type'] =  'application/json';
            headerConfig['Accept'] = 'application/json';
            req.headers.append('Access-Control-Allow-Origin', '*');
            req.headers.append('Content-Type', 'application/json');
            req.headers.append('Access-Control-Allow-Headers', 'origin,x-requested-with, content-type, accept');
            req.headers.append('Access-Control-Request-Headers', 'origin,x-requested-with, content-type, accept');

      const request  = req.clone({
            url: baseUrl+"/"+req.url,
            setHeaders: headerConfig,
            headers: req.headers
      });
      return next.handle(request);
  }
}

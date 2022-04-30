import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://a33906731cb8d4b7a90d60b42561a9b5-184453386.us-west-2.elb.amazonaws.com/api/v1/studentSurveys/";

  constructor(private httpClient: HttpClient) { }

  getSurveys(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.baseURL)
  }

  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post(this.baseURL, student);
  }

}

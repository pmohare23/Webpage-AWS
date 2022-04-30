import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {

  students!: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getSurveys();
  }

  private getSurveys(){
    this.studentService.getSurveys().subscribe(data =>{
      this.students = data;
    });
  }
}

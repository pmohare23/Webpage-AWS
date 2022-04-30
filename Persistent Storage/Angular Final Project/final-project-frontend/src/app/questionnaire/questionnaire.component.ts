import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  student: Student = new Student();
  liked: any=[];
  constructor(private router:Router, private studentService: StudentService) { }

  ngOnInit(): void {
  }

  saveStudent(){
    this.studentService.createStudent(this.student).subscribe( data =>{
      console.log(data);
      this.goToSurveyList();
    },
    error =>console.log(error));
  }

  goToSurveyList(){
    this.router.navigate(['/acknowledgment'])
  }

  onSubmit(){
    console.log(this.student)
    this.student.liked = this.liked.join();
    this.saveStudent();
  }

  onCheckboxChange(event:any, value:any) {
    console.log("event value")
    console.log(event)
    console.log("value")
    console.log(value)
    if (event.target.checked) {

      this.liked.push(value);
    } 
    if (!event.target.checked) {

      let index = this.liked.indexOf(value);

      if (index > -1) {

        this.liked.splice(index, 1);
      }
    }
  }

}

import { Component } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project-frontend';

  constructor(private router:Router){}

  goToSurveys():void{
    console.log("going to surveys")
    this.router.navigate(['surveys']);
  }
  TakeSurveys():void{
    console.log("going to surveys")
    this.router.navigate(['questionnaire']);
  }
}

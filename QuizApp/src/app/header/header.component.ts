import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models';
import { QuizService } from '../services/quiz.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
 
  constructor(private authService:AuthenticationService) { }

  ngOnInit() {

   
  }

}

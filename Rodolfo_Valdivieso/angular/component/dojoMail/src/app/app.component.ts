import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';

  email1 = new Email("test@test.com", false, "Subject1", "Content1");
  email2 = new Email("test2@test.com", true, "Subject2", "Content2");
  email3 = new Email("test3@test.com", true, "Subject3", "Content3");
  email4 = new Email("test4@test.com", false, "Subject4", "Content4");
  email5 = new Email("test5@test.com", true, "Subject5", "Content5");

  arr = [this.email1, this.email2, this.email3, this.email4, this.email5];
}

class Email {
	    email: string;
	    importance: boolean;
	    subject:string;
	    content:string;
	    constructor(email: string, importance: boolean, subject:string, content:string){
	        this.email = email;
	        this.importance = importance;
	        this.subject = subject;
	        this.content = content;
	    }
	    
	}

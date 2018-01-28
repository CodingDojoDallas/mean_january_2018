import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 'bootstrap.min.css']
})
export class AppComponent {
  title = 'Dojo Mail';

	email1 = new Email('jq@gmail.com', true, 'Do I need a component?', 'I honestly know what I am doing.')
	email2 = new Email('CD@gmail.com', true, 'What da wedda?', 'Hey goo-goo, what da wedda?')
	email3 = new Email('mm@gmail.com', false, 'Typescript is kind of cool.', 'I am starting to understand this.')
	email4 = new Email('kd@gmail.com', false, 'Will Amazon HQ2 come to Dallas?', 'Dallas makes the 20 finalist to house Amazon HQ2')

	emailArray = [this.email1, this.email2, this.email3, this.email4]

}

class Email {
address: string;
importance: boolean;
subject: string;
content: string;

constructor(address: string, importance: boolean, subject: string, content: string) {
    this.address = address;
    this.importance = importance;
    this.subject = subject;
    this.content = content;
	}
}

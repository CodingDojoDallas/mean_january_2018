// these are the libraries that are included by default
import { Component } from '@angular/core';

// this is how the component page talks to the html and css pages and links them together
@Component({

  // selector matches up with a specific tag on the index.html page
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// email importance subject content
export class AppComponent {
  title = 'City Wok'
  information : object[] = [
    {email: 'RICH@nam.com', importance: true, subject:'snow', content:'lets go make yellow snow'},
    {email: 'bee@jack.com', importance: false, subject:'rg: snow', content:'umm... no thanks...'},
    {email: 'staci@rod.com', importance: false, subject:'rg:rg: snow', content:'ewww... stupid... lol'}];
  }

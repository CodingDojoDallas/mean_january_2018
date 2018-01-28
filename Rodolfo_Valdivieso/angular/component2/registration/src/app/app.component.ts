import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '!';
  user = new User();
  users = [];
  onSubmit(){
    this.users.push(this.user);
    this.user = new User();
    //this.yourControlNameHere['_touched'] = false;
  }

  passwordConfirmation(){
  	if(this.user.password != this.user.pass_confirm){
  		return true;
  	}else{
  		return false;
  	}
  }



}

var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};

//module.directive("compareTo", compareTo);

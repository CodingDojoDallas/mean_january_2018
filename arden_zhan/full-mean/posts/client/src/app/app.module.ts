import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserService } from './user/user.service';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';
import { PostComponent } from './post/post.component';
import { PostNewComponent } from './post/post-new/post-new.component';
import { PostService } from './post/post.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserNewComponent,
    UserLogoutComponent,
    PostComponent,
    PostNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

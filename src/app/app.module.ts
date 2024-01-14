import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CourseCardComponent } from "./course-card/course-card.component";
import { TestElementComponent } from "./test-element/test-element.component";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CourseCardComponent,
    TestElementComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

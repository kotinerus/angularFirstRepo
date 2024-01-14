import { Component, ViewChild } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses = [...COURSES];
  course = COURSES[0];
  valueOfText = "";
  numberValue = 0;

  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;

  onCurrentSelected(course: Course) {
    console.log(this.card.course.description);
  }
  // onChange(value) {
  //   this.numberValue += value;
  // }
  changeValueOfText($event) {
    this.valueOfText = $event;
  }
}

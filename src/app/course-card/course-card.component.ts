import { Component, Input, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Course } from "../model/course";

import { EventEmitter } from "@angular/core";

@Component({
  selector: "course-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent {
  @Input()
  course: Course;

  @Input()
  index: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("Przycisk działa");
    this.courseSelected.emit(this.course);
  }
  cardClasses() {
    return {
      beginner: this.course.category == "BEGINNER",
    };
  }
}

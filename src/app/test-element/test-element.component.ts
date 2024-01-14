import { Component, Output, EventEmitter, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
// import {  } from "stream";

@Component({
  selector: "test-element",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./test-element.component.html",
  styleUrl: "./test-element.component.css",
})
export class TestElementComponent {
  testValue = "TESTOWA WARTOŚĆ";

  @Input()
  @Output()
  updatedValue = new EventEmitter<String>();

  onValueChange(value) {
    this.updatedValue.emit(value);
  }
}

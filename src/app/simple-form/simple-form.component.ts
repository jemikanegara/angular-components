import { Component, OnInit, Input } from "@angular/core";
// import { Message } from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: "app-simple-form",
  templateUrl: `./simple-form.component.html`,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() message;

  onClick(value) {
    console.log(value);
  }

  constructor() {}

  ngOnInit() {}
}

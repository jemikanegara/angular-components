import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MailService {
  messages = ["america", "indonesia", "malaysia"];
  constructor() {}
}

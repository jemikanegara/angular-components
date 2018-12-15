import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MailService {
  message = ['america', 'indonesia', 'malaysia'];
  constructor() {}
}

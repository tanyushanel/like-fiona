import { Injectable } from '@angular/core';
import { Message } from './contact.component';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}
  saveMessage(message: Message): void {
    localStorage.setItem(message.subject, JSON.stringify(message));
  }
}

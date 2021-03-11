import { ContactService } from './contact.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Article } from '../article/article.component';

export class Message {
  name: string;
  email: string;
  subject: string;
  content: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  article: Article = {
    title: 'contact',
    subTitle: 'nice to meet you',
    text: ``,
    img: '../../assets/images/big10.jpg',
    btn: ``,
    href: '',
  };

  form: FormGroup;
  nameControl: FormControl;
  emailControl: FormControl;
  subjectControl: FormControl;
  contentControl: FormControl;

  isSent: boolean;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.isSent = false;
    this.nameControl = new FormControl('', Validators.required);
    this.emailControl = new FormControl('', Validators.required);
    this.subjectControl = new FormControl('', Validators.required);
    this.contentControl = new FormControl('', Validators.required);
    this.form = new FormGroup({
      name: this.nameControl,
      email: this.emailControl,
      subject: this.subjectControl,
      content: this.contentControl,
    });
  }

  sendMessage(): void {
    const message = new Message();
    message.content = this.contentControl.value;
    message.name = this.nameControl.value;
    message.subject = this.subjectControl.value;
    message.email = this.emailControl.value;
    this.contactService.saveMessage(message);
    this.isSent = true;
  }
}

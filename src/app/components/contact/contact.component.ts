import { Component, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  
  private _snackBar = inject(MatSnackBar);
  ngOnInit() {
    emailjs.init(environment.emailjs.publicKey);
  }
  emailInfo = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Subject: new FormControl('', Validators.required),
    Message: new FormControl('', Validators.required)
  })

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onSubmit() {
    if (this.emailInfo.valid) {
      this._snackBar.open('Email sending...', 'Close', {
        duration: 3000
      });
      emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          name: this.emailInfo.value.Name,
          email: this.emailInfo.value.Email,
          subject: this.emailInfo.value.Subject,
          message: this.emailInfo.value.Message
        }).then((response) => {
          this._snackBar.open('Email sent!', 'Close', {
            duration: 3000
          });
          this.emailInfo.reset();
        }).catch((error) => {
          this._snackBar.open('Sorry, something went wrong. Your email did not send.', 'Close', {
            duration: 3000
          });
        });
    }
  };
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-contact-page',
  imports: [FormsModule,NavbarComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {


  model = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };


  onSubmit() {
    if (this.model.name && this.model.email && this.model.subject && this.model.message) {
      alert('Form Submitted Successfully');
      // Logic to handle form submission, e.g., sending data to a server
    }
  }

  onReset() {
    this.model = { name: '', email: '', subject: '', message: '' };
  }

}

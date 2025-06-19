import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class SigninComponent {
  email = '';
  password = '';
  
  showEmailError = false;
  showPasswordError = false;

  onSubmit() {
    this.showEmailError = false;
    this.showPasswordError = false;

    if (!this.email.trim() && !this.password.trim()) {
      this.showEmailError = true;
      this.showPasswordError = true;
      return;
    }

    if (!this.email.trim()) {
      this.showEmailError = true;
      return;
    }

    if (!this.password.trim()) {
      this.showPasswordError = true;
      return;
    }

    console.log('Email:', this.email);
    console.log('Senha:', this.password);
  }
}

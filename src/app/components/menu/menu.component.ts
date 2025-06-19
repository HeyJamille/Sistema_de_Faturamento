import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  isCollapsed = false;

  // Way for the child component to notify the parent component that the state has changed. 
  @Output() collapsedChange = new EventEmitter<boolean>();

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedChange.emit(this.isCollapsed); // Emit the new state to anyone listening
  }
}


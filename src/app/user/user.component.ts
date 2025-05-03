import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})



export class UserComponent {
  username = 'Santiago';
  isLoggedIn = true;
  @Output() usernameChanged = new EventEmitter<string>();

  ngOnInit() {
    this.usernameChanged.emit(this.username);
  }
  
}

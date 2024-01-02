import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-for-loop',
  standalone: true,
  imports: [],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.scss',
  providers: [UserService]
})
export class ForLoopComponent implements OnInit{

  userList: any[] = [];

  constructor(private userService : UserService){}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(): void {
    this.userList = this.userService.getUserList();
  }

  searchUser(searchTerm: string) {
    if(searchTerm){
      this.userList = this.userService.getSearchUserList(searchTerm);
    } else {
      this.getUserList();
    }
  }
}

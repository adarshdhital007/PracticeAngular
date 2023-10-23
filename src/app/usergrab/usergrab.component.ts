import { Component, OnInit } from '@angular/core';
import { JsongrabusersService } from '../jsongrabusers.service';

interface User {
  first_name: string;
  last_name: string;
  birthdate: string;
  age: number;
}

@Component({
  selector: 'app-usergrab',
  templateUrl: './usergrab.component.html',
  styleUrls: ['./usergrab.component.css'],
})
export class UsergrabComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchQuery: string = '';

  constructor(private jsongrabber: JsongrabusersService) {}

  ngOnInit(): void {
    this.jsongrabber.getUsers().subscribe((data: User[]) => {
      const today = new Date();
      this.users = data.map((user) => ({
        ...user,
        age: today.getFullYear() - new Date(user.birthdate).getFullYear(),
      }));

      this.filteredUsers = this.users;
    });
  }

  searchUsers() {
    this.filteredUsers = this.users.filter((user) => {
      const fullname = `${user.first_name}${user.last_name}`;
      const searchLower = this.searchQuery.toLowerCase();
      return (
        fullname.toLowerCase().includes(searchLower) ||
        user.birthdate.toLowerCase().includes(searchLower)
      );
    });
  }
  isMatch(value: string): boolean {
    const searchLower = this.searchQuery.toLowerCase();
    return value.toLowerCase().includes(searchLower);
  }
}

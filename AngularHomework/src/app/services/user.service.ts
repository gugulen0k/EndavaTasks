import {Injectable} from '@angular/core';

import {USERS} from "../mock-users";
import {User} from "../User";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { AvatarService } from './avatar.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  findUser(username: string, password: string){}

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO@Idrice: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO@Idrice: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a UserService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`UserService: ${message}`);
    console.warn(`UserService: ${message}`);
  }
  // Set Avatar for Fun

  private addAvatar(userList: AppUser[]) {
    // this.messageService.add(`UserService: ${message}`);
    if (userList === null) {
      return;
    }
    userList.forEach(user => {

      if (user.avatar === undefined) {
        user.avatar = this.avatarService.generateAvatar(user.fName, user.lName);
      }

    });
  }
}

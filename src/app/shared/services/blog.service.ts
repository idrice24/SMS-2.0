import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostUser } from '../models/post-user';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
	private comments : Comment[];
	blog : PostUser;

	private blogUrl = 'http//localhost:8080/addComments';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, private logService: LogService) { }
  

  getAppComment(): Observable<PostUser[]> {
    return this.httpClient.get<PostUser[]>(this.blogUrl).pipe(
      tap((commentList: PostUser[]) => this.logService.log(commentList)),
      catchError(this.handleError<PostUser[]>('getAppComment', []))
    );
  }

  /** CREATE: create a comment */
  addAppComment(blog: PostUser): Observable<PostUser> {
    return this.httpClient.post<PostUser>(this.blogUrl, blog, this.httpOptions).pipe(
      tap((newComment: PostUser) => this.logService.log(`added Comment`)),
      catchError(this.handleError<PostUser>('addComment'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a BlogService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`BlogService: ${message}`);
    console.warn(`BlogService: ${message}`);
  }
}

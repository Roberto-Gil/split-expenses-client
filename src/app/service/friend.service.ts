import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Friend } from '../model/friend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private friendUrl: string;
  private balanceUrl: string;

  constructor(private http: HttpClient) {
    this.friendUrl = '/SplitExpense/friend';
	this.balanceUrl = '/SplitExpense/balance';
  }

  public findAll(): Observable<Friend[]> {
    return this.http.get<Friend[]>(this.balanceUrl);
  }

  public save(Friend: Friend) {
    return this.http.put<Friend>(this.friendUrl, Friend);
  }

}

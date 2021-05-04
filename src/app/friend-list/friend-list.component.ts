import { Component, OnInit } from '@angular/core';
import { FriendService } from '../service/friend.service';
import { Friend } from '../model/friend';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.styl']
})
export class FriendListComponent implements OnInit {

  friends: Friend[];

  constructor(private friendService: FriendService) {
	   this.friends = [];
  }

  ngOnInit(): void {
	  this.friendService.findAll().toPromise().then((data : any) => {
      this.friends = data;
    });
  }

}

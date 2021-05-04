import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FriendService } from '../service/friend.service';
import { Friend } from '../model/friend';

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.styl']
})
export class FriendFormComponent {

  friend: Friend;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private friendService: FriendService) {
    this.friend = new Friend();
  }

  onSubmit() {
    this.friendService.save(this.friend).subscribe(result => {});
  }

  gotoFriendList() {
    this.router.navigate(['/friends']);
  }

}
import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Location, DatePipe } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute, private postService: PostService, 
    private location: Location, private datepipe: DatePipe) {}

  ngOnInit() {
    this.getPost();
    //this.datepipe.transform(this.post.date, 'dd/MM/yyyy');
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id)
      .subscribe(postData => this.post = postData);
  }

  mainPage(): void {
    this.location.back();
  }

}
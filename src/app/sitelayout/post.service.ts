import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { Post } from './post/post';

@Injectable()
export class PostService {

    posts: Post[] = [{id: 0, image:'#', date: new Date().toLocaleDateString(), title: 'Post 1', content: 'Post 1 content'},
    {id: 1, image:'#', date: new Date().toLocaleDateString(), title: 'Post 2', content: 'Post 2npm i fireba content'}];

    constructor(private http: HttpClient, private router: Router) {}

    getPost(id: number): Observable<Post> {
        var subject = new Subject<Post>();
        if (this.posts.length === 0) {
            // Find posts
        } else {
            return of(this.posts.find(post => post.id === id));
        }
    }

}
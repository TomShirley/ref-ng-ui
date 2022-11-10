import { Injectable } from '@angular/core';
import { BlogsClient } from './blogs-api-client';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Blog } from '@feature/blog-list/models/blog';
import flatten from 'flatten';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(public client: BlogsClient) { }

  public getBlog(id: string): Observable<Blog>{
    return this.client.getBlog(id)
      .pipe(
        map(blog => ({
                id: blog.id,
                url: blog.url,                
              })));
  }

  public getBlogs(): Observable<Blog[]>{
    return this.client.getBlogs()
      .pipe(
        map(res => res.blogs?.map(
          blog => ({
            id: blog.id,
            url: blog.url
          })
        )),        
        map(x => ([] as Blog[]).concat(flatten(x))));
  }
                   
}

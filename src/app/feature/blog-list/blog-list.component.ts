import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {ActivatedRoute} from '@angular/router';
import {Blog} from './models/blog';
import { BlogsService } from '@services/blogs.service';
import { Subscription } from 'rxjs';
import {HttpClient, HttpHandler} from '@angular/common/http';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogListComponent implements OnInit {
  private subscriptions = new Subscription();
  public rows: Blog[];
  public ColumnMode = ColumnMode;

  constructor(private route: ActivatedRoute,
              private blogsService: BlogsService) { }

  ngOnInit(): void {
    //this.rows = 
    //  [new Blog('ddd6015f-a869-4ff1-8b57-23ae22930f1b', "https://blah"), new Blog('ddd6015f-a869-4ff1-8b57-23ae22930f1b', "https://blah")];
    //columns = [{ prop: 'url' }, { name: 'id' }];
    
    this.getBlogs();
    

  }

  private getBlogs() {
    this.subscriptions.add(this.blogsService.getBlogs().subscribe(
      (blogs: Blog[]) => {

        this.rows = blogs;
      }, (error) => {        
      }
    ));
  }

}

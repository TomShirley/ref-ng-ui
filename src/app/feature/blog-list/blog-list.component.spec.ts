import { ComponentFixture, TestBed } from '@angular/core/testing';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { BlogListComponent } from './blog-list.component';

describe('BlogListComponent', () => {
  let component: BlogListComponent;
  let fixture: ComponentFixture<BlogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogListComponent ],
      imports: [
        NgxDatatableModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

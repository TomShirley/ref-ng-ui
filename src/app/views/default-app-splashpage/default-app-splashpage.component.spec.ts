import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAppSplashpageComponent } from './default-app-splashpage.component';

describe('DefaultAppSplashpageComponent', () => {
  let component: DefaultAppSplashpageComponent;
  let fixture: ComponentFixture<DefaultAppSplashpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultAppSplashpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultAppSplashpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoinfoComponent } from './todoinfo.component';

describe('TodoinfoComponent', () => {
  let component: TodoinfoComponent;
  let fixture: ComponentFixture<TodoinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

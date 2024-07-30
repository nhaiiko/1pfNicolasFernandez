import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSideComponent } from './course-side.component';

describe('CourseSideComponent', () => {
  let component: CourseSideComponent;
  let fixture: ComponentFixture<CourseSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

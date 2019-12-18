import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGittingComponent } from './create-gitting.component';

describe('CreateGittingComponent', () => {
  let component: CreateGittingComponent;
  let fixture: ComponentFixture<CreateGittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

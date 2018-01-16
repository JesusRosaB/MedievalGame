import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesthallComponent } from './questhall.component';

describe('QuesthallComponent', () => {
  let component: QuesthallComponent;
  let fixture: ComponentFixture<QuesthallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesthallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesthallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

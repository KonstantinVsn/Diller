import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegInComponent } from './reg-in.component';

describe('RegInComponent', () => {
  let component: RegInComponent;
  let fixture: ComponentFixture<RegInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegInComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

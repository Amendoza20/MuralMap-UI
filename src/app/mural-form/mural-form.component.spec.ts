import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralFormComponent } from './mural-form.component';

describe('MuralFormComponent', () => {
  let component: MuralFormComponent;
  let fixture: ComponentFixture<MuralFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuralFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

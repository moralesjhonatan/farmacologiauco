import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgDosComponent } from './org-dos.component';

describe('OrgDosComponent', () => {
  let component: OrgDosComponent;
  let fixture: ComponentFixture<OrgDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgUnoComponent } from './org-uno.component';

describe('PracticaunoComponent', () => {
  let component: OrgUnoComponent;
  let fixture: ComponentFixture<OrgUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

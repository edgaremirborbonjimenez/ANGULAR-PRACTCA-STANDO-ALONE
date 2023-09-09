import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MprincipalComponent } from './mprincipal.component';

describe('MprincipalComponent', () => {
  let component: MprincipalComponent;
  let fixture: ComponentFixture<MprincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MprincipalComponent]
    });
    fixture = TestBed.createComponent(MprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

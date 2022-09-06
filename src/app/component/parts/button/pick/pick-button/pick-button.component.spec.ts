import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickButtonComponent } from './pick-button.component';

describe('PickButtonComponent', () => {
  let component: PickButtonComponent;
  let fixture: ComponentFixture<PickButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

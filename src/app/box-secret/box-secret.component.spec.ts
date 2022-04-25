import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSecretComponent } from './box-secret.component';

describe('BoxSecretComponent', () => {
  let component: BoxSecretComponent;
  let fixture: ComponentFixture<BoxSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxSecretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

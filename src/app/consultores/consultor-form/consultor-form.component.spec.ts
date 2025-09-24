import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorFormComponent } from './consultor-form.component';

describe('ConsultorFormComponent', () => {
  let component: ConsultorFormComponent;
  let fixture: ComponentFixture<ConsultorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

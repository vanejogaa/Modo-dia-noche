import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NocheDiaComponent } from './noche-dia.component';

describe('NocheDiaComponent', () => {
  let component: NocheDiaComponent;
  let fixture: ComponentFixture<NocheDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NocheDiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NocheDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

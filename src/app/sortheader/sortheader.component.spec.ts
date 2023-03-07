import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortheaderComponent } from './sortheader.component';

describe('SortheaderComponent', () => {
  let component: SortheaderComponent;
  let fixture: ComponentFixture<SortheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

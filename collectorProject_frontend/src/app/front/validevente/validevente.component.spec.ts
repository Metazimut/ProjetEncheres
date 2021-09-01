import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValideventeComponent } from './validevente.component';

describe('ValideventeComponent', () => {
  let component: ValideventeComponent;
  let fixture: ComponentFixture<ValideventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValideventeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValideventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

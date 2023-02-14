import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizadoComponent } from './personalizado.component';

describe('PersonalizadoComponent', () => {
  let component: PersonalizadoComponent;
  let fixture: ComponentFixture<PersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

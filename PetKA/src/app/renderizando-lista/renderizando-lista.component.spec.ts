import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderizandoListaComponent } from './renderizando-lista.component';

describe('RenderizandoListaComponent', () => {
  let component: RenderizandoListaComponent;
  let fixture: ComponentFixture<RenderizandoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderizandoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderizandoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

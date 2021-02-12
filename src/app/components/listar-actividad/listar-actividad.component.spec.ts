import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarActividadComponent } from './listar-actividad.component';

describe('ListarActividadComponent', () => {
  let component: ListarActividadComponent;
  let fixture: ComponentFixture<ListarActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

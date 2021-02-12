import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTodasActividadesComponent } from './listar-todas-actividades.component';

describe('ListarTodasActividadesComponent', () => {
  let component: ListarTodasActividadesComponent;
  let fixture: ComponentFixture<ListarTodasActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarTodasActividadesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTodasActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

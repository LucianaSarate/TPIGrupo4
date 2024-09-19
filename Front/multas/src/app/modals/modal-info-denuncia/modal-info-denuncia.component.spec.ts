import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoDenunciaComponent } from './modal-info-denuncia.component';

describe('ModalInfoDenunciaComponent', () => {
  let component: ModalInfoDenunciaComponent;
  let fixture: ComponentFixture<ModalInfoDenunciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalInfoDenunciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInfoDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

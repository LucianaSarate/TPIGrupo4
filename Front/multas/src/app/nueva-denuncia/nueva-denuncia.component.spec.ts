import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaDenunciaComponent } from './nueva-denuncia.component';

describe('NuevaDenunciaComponent', () => {
  let component: NuevaDenunciaComponent;
  let fixture: ComponentFixture<NuevaDenunciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaDenunciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

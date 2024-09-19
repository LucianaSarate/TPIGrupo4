import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-info-denuncia',
  standalone: true,
  imports: [],
  templateUrl: './modal-info-denuncia.component.html',
  styleUrl: './modal-info-denuncia.component.css'
})
export class ModalInfoDenunciaComponent {
  constructor(public activeModal: NgbActiveModal) {}
  cerrar() {
    this.activeModal.close(); 
  }
}

import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Denuncia } from '../../model/denuncia';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-info-denuncia',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './modal-info-denuncia.component.html',
  styleUrl: './modal-info-denuncia.component.css'
})
export class ModalInfoDenunciaComponent {
  @Input() denuncia!: Denuncia; 

  constructor(public activeModal: NgbActiveModal) {}
  cerrar() {
    this.activeModal.close(); 
  }
}

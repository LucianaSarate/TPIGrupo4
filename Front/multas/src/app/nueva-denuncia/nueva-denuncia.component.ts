import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DenunciaService } from '../services/denuncia.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-nueva-denuncia',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './nueva-denuncia.component.html',
  styleUrl: './nueva-denuncia.component.css'
})
export class NuevaDenunciaComponent implements OnInit {

  selectedOption: string = '';
  selectedDate: string = '';
  maxDate: string = '';
  textareaContent: string = '';
  textareaPlaceholder: string = 'Ingrese su mensaje aquí...';
  complaintTypes: { id: string; value: string }[] = [];

  constructor(private denunciaService: DenunciaService) { }

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes(): void {
    this.denunciaService.getTypes().subscribe({
      next: (data) => {
        this.complaintTypes = data;
      },
      error: (error) => {
        console.error('error: ', error);
      }
    })
  }

  onSubmit(): void {
    if (this.selectedOption && this.selectedDate && this.textareaContent) {
      const denunciaData = {
        userId: 1,
        complaintType: this.selectedOption,
        description: this.textareaContent,
        pictures: [
          {
            pictureUrl: "https://picsum.photos/200/300"
          }
        ]
      };

      this.denunciaService.add(denunciaData).subscribe({
        next: (response) => {
          console.log('Denuncia enviada correctamente', response);
        },
        error: (error) => {
          console.error('Error al enviar la denuncia', error);
        }
      });
    }
  }

}

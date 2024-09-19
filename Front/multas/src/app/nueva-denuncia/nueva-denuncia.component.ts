import { Component } from '@angular/core';
import { TipoDenuncia } from '../model/denuncia';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nueva-denuncia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nueva-denuncia.component.html',
  styleUrl: './nueva-denuncia.component.css'
})
export class NuevaDenunciaComponent {
  tipoDenuncias: string[] = Object.values(TipoDenuncia);

  textAreaValue: string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quisquam impedit eos, necessitatibus harum debitis. Similique voluptates iste dolorem quisquam tempora. Ut totam nihil ex explicabo officia dicta dolorum atque! Ad quibusdam odio, laborum corporis magnam ratione voluptatum quam ut tenetur iusto corrupti illum molestiae odit debitis facilis architecto omnis! Quae quia officia recusandae soluta illum tempore veniam, iusto eius."

}

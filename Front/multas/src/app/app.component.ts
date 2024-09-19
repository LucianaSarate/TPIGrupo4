import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDenunciasComponent } from "./lista-denuncias/lista-denuncias.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaDenunciasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multas';
}

import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

  
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
 

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.loadExternalScript('../../../../../assets/javascript/header.js')
      .then(() => {
        console.log('Script carregado com sucesso!');
        // Aqui você pode chamar funções do script externo, se necessário
        // Por exemplo:
        // this.initHeaderScript();
      })
      .catch(() => {
        console.error('Erro ao carregar o script.');
      });
  }

  loadExternalScript(url: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = url;

      scriptElement.onload = () => {
        resolve(); // Resolva a Promise quando o script for carregado com sucesso
      };

      scriptElement.onerror = () => {
        reject(); // Rejeite a Promise em caso de erro ao carregar o script
      };

      document.body.appendChild(scriptElement);
    });
  }
}

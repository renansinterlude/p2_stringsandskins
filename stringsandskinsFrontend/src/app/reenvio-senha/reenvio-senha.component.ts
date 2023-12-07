import { Component } from '@angular/core';

@Component({
  selector: 'app-reenvio-senha',
  templateUrl: './reenvio-senha.component.html',
  styleUrls: ['./reenvio-senha.component.css']
})
export class ReenvioSenhaComponent {
  email: string = '';
  mensagem: string = '';

  enviarEmail() {
    if (this.validarEmail(this.email)) {
      this.mensagem = 'Um e-mail com instruções de recuperação foi enviado.';
    } else {
      this.mensagem = 'E-mail inválido.';
    }
  }

  private validarEmail(email: string): boolean {
    if (!email) {
      return false;
    }

    const formatoEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    return formatoEmail.test(email);
  }
  
}

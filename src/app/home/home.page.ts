import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  //Valores//
  inputValue : string = '';
  valor1: any = null;
  valor2: any = null;
  resultado: any = null;
  operador: any = null;

  exibir(numero: any) {
    if (this.valor1 == null) {
      this.valor1 = numero
      this.resultado = numero
    } else if (this.valor2 == null) {
      this.valor2 = numero
      this.resultado = numero
    }

    console.log(this.valor1);
    console.log(this.valor2);
    
  }

  operacao(operador: any){
    this.operador=operador
  }
  
  calcular(){
    if (this.operador == '+') {
      this.resultado = this.valor1 + this.valor2;
    } else if (this.operador == '-') {
      this.resultado = this.valor1 - this.valor2;
    } else if (this.operador == '*') {
      this.resultado = this.valor1 * this.valor2;
    } else if (this.operador == '/') {
      this.resultado = this.valor1 / this.valor2;
    }
    console.log(this.operador);
  }

  clear() {
    this.valor1=null
    this.valor2=null
    this.resultado=null
  
  }

  apagar() {
  if(this.valor1 != null && this.valor2==null){
    this.valor1=null
    this.resultado=null
  }
  if(this.valor1 != null && this.valor2==null){
    this.valor2=null
    this.resultado=null
  }

  }
}

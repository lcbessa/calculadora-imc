import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight: number = 0
  height: number = 0
  imc: number = 0
  classification: string =  ""
  

  constructor(private toastCtrl: ToastController) {}
  onClassificationIMC(){
    if (this.imc < 18.5) {
      this.classification = "MAGREZA"
    } 
    else if (this.imc >=18.5 && this.imc <= 24.9) {
      this.classification = "NORMAL"
    }
    else if (this.imc >= 25.0 && this.imc <= 29.9) {
      this.classification = "SOBREPESO"
    }
    else if (this.imc >= 30.0 && this.imc <= 39.9) {
      this.classification = "OBESIDADE"
    }
    else {
      this.classification = "OBESIDADE GRAVE"
    }

  }
  onCalculate() {
    if (this.height <= 0 || this.weight <= 0) {
      return
    }
    
    this.imc = this.weight / (this.height * this.height)
    this.onClassificationIMC()
    this.showIMC()
  }

  async showIMC() {
    const toast = await this.toastCtrl.create({
      message: `IMC = ${this.imc.toFixed(2)} - Classificação: ${this.classification}`,
      duration: 3000,
      color: 'secondary'
    })
    
    toast.present()

  }


}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroFuncionarioPage } from '../cadastro-funcionario/cadastro-funcionario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

    this.navCtrl = navCtrl;
  }


  cadastroFunc = function(){
    this.navCtrl.push(CadastroFuncionarioPage);
}
  
  
  
}

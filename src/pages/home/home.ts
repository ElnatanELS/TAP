import { CrushProvider } from './../../providers/crush/crush';
import { CalcLoveProvider } from './../../providers/calc-love/calc-love';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dados:any;
  fname = "";
  sname = "";
  form: FormGroup;
  

  constructor( public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private calc: CalcLoveProvider,
    private toast: ToastController, private provider : CrushProvider) {
 
    // maneira 1
    this.dados = this.navParams.data.codigo || { };
    this.createForm();
 
    // // maneira 2
    // this.codigo = { };
    // this.createForm();
 
    // if (this.navParams.data.key) {
    //   const subscribe = this.provider.get(this.navParams.data.key).subscribe((c: any) => {
    //     subscribe.unsubscribe();
 
    //     this.codigo = c;
    //     this.createForm();
    //   })
    // }
  
  
  
  
  }

  
  get(){
    this.calc.getCalcular()
    .then(data => {
      this.dados = data;
      console.log(this.dados);
    });
  }

  calcular(){
    this.calc.setNames(this.fname, this.sname)
    this.get();
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.dados.key],
      fname: [this.dados.fname, Validators.required],
      sname: [this.dados.sname, Validators.required],
     result: [this.dados.reresult],
     percentage: [this.dados.percentage]
    });
  }
 
  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.dados)
        .then(() => {
          this.toast.create({ message: 'Contato salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000 }).present();
          console.error(e);
        })
    }
    this.calcular()
  }

}

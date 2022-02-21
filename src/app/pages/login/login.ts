import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';
import { Todo1Data } from '../../providers/todo1-data';

import { UserOptions } from '../../interfaces/user-options';

import { AlertController } from '@ionic/angular';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;
  user: any = [];

  constructor(
    public userData: UserData,
    public confData: Todo1Data,
    public alerta: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
    this.confData.dataLogin().subscribe((dataLogin: any[]) => {
      this.user = dataLogin;
    });
  }

  async onLogin(form: NgForm) {
    this.submitted = true;
    
  if (form.valid) {
    
    if( this.login.username == this.user[0].username && this.login.password == this.user[0].password){
      this.userData.login(this.login.username, this.login.password);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
    else{
      
      const alert =  await this.alerta.create({
        header: 'Error de Acceso',
        message: 'Usuario ó contraseña incorrectos.',
        buttons: ['OK']
      });
      await alert.present();
    }  
    }
  }
}

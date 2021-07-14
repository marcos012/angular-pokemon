import { Component, Injector, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../../app/shared/components/base-form.component';
import { UsuarioLogadoService } from '../../services/usuario-logado.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseFormComponent implements OnInit {

  private usuarioService: UsuarioLogadoService;

  constructor(protected injector: Injector) {
    super(injector);
    this.usuarioService = this.injector.get(UsuarioLogadoService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.modelForm.valueChanges.subscribe(a => console.log(a));
  }

  protected buildModelForm(): void {
    this.modelForm = this.formBuilder.group({
      user: [''],
      password: ['']
    })
  }

  submit() {
    const { user } = this.modelForm.controls;
    const randomString = Math.random().toString(36).substring(7);

    window.localStorage.setItem('accessToken', `${user.value}: ${randomString}`);
    this.usuarioService.username = user.value;

    this.router.navigate(['/']);
  }
}

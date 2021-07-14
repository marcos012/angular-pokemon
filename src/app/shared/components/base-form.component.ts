import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: '',
})
export abstract class BaseFormComponent implements OnInit {
  public modelForm: FormGroup;
  public submittingForm = false;
  public validate = false;

  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;

  constructor(protected injector: Injector) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.formBuilder = this.injector.get(FormBuilder);
  }

  ngOnInit(): void {
    this.buildModelForm();
  }

  public submit() {
    this.submittingForm = true;
    this.validate = true;

    if (this.modelForm.invalid) {
      alert('Corrija os campos em destaque');
      return;
    }

    this.createResource();
  }


  public createResource() {
    alert('Sucesso')
  }

  hasError(campo: any): boolean {
    return this.modelForm.get(campo) && this.modelForm.get(campo).invalid && this.validate;
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.hasError(campo),
    };
  }

  protected desabilitarModelForm() {
    this.modelForm.disable();
  }

  protected habilitarModelForm() {
    this.modelForm.enable();
  }

  protected abstract buildModelForm(): void;
}

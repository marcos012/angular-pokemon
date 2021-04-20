import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  protected formBuilder: FormBuilder;
  public formGroup: FormGroup;

  constructor(private injector: Injector) {
    this.formBuilder = this.injector.get(FormBuilder);
  }

  ngOnInit(): void {
    this.buildFormGroup();
  }

  buildFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      weight: ['', [Validators.required]]
    })
  }

  onSubmit(): void {
    if (!this.formGroup.valid) {
      alert('Formulario inválido')
      return;
    }

    console.log(this.formGroup.value);
  }
}

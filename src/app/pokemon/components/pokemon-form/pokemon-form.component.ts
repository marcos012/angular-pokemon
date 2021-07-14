import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseFormComponent } from 'src/app/shared/components/base-form.component';
import { WeightPipe } from 'src/app/shared/pipes/weight.pipe';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent extends BaseFormComponent implements OnInit {
  types = ["fogo", "agua", "terra"]

  constructor(protected injector: Injector, private weightPipe: WeightPipe) {
    super(injector);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  protected buildModelForm(): void {
    this.modelForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      weight: [null, [Validators.required]]
    });
  }

  onSubmit(): void {
    const { weight } = this.modelForm.controls
    weight.setValue(this.weightPipe.removerFormatacao(weight.value))

    super.submit();
  }

  createResource() {
    this.router.navigate([''])
  }
}

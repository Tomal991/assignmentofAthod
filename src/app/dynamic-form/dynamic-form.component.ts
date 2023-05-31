import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFormControls } from '../model/dynamic-form-controls';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  dynamicForm: FormGroup;
  dynamicFormControls: any[] = DynamicFormControls;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({});
    for (const control of DynamicFormControls) {
      const validators = [];
      if (control.mandatory) {
        validators.push(Validators.required);
      }
      if (control.maxLength) {
        validators.push(Validators.maxLength(control.maxLength));
      }
      if (control.minLength) {
        validators.push(Validators.minLength(control.minLength));
      }
      if (control.maxValue) {
        validators.push(Validators.max(control.maxValue));
      }
      if (control.minValue) {
        validators.push(Validators.min(control.minValue));
      }

      if (control.type === 'Text') {
        this.dynamicForm.addControl(
          control.label,
          this.formBuilder.control('', validators)
        );
      } else if (control.type === 'Numeric') {
        this.dynamicForm.addControl(
          control.label,
          this.formBuilder.control('', [
            ...validators,
            Validators.pattern(/^[0-9]+$/),
          ])
        );
        this.dynamicForm.get(control.label).valueChanges.subscribe((value) => {
          const valueToStr = value.toString();
          if (valueToStr.length < control.minLength) {
            this.dynamicForm.get(control.label).setErrors({
              minlength: 'minimum length is' + control.minLength,
            });
          } else if (valueToStr.length > control.maxLength) {
            this.dynamicForm.get(control.label).setErrors({
              maxlength: 'maximum length is' + control.maxLength,
            });
          }
        });
      } else if (control.type === 'RadioButton') {
        this.dynamicForm.addControl(
          control.label,
          this.formBuilder.control(null, validators)
        );
      } else if (control.type === 'Single Choice') {
        this.dynamicForm.addControl(
          control.label,
          this.formBuilder.control(null, validators)
        );
      }
    }
  }

  FormOnSubmit() {
    if (this.dynamicForm.invalid) {
      this.dynamicForm.markAllAsTouched();
      return;
    }

    console.log(this.dynamicForm.value);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelTextInputComponent } from '../../shared_components/components/label-inputs/label-text-input/label-text-input.component';
import { LabelPasswordInputComponent } from '../../shared_components/components/label-inputs/label-password-input/label-password-input.component';
import { SubmitButtonComponent } from '../../shared_components/components/submit-button/submit-button.component';



@NgModule({
  declarations: [
    LabelTextInputComponent,
    LabelPasswordInputComponent,
    SubmitButtonComponent
  ],
  exports: [
    LabelTextInputComponent,
    LabelPasswordInputComponent,
    SubmitButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormElementsModule { }

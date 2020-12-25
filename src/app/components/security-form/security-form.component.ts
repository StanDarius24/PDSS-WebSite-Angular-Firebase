import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Subscription} from 'rxjs';
import {UserSecurity} from '../../core/models/user-security.model';

@Component({
  selector: 'app-security-form',
  templateUrl: './security-form.component.html',
  styleUrls: [
    '../style/style.scss',
    './security-form.component.css'
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SecurityFormComponent),
      multi: true
    }
  ]
})
export class SecurityFormComponent implements OnInit, ControlValueAccessor, OnDestroy {
  securityForm: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.securityForm = this.formBuilder.group({
      password: ''
    });

    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.securityForm.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  get value(): SecurityFormValues {
    return this.securityForm.value;
  }

  set value(value: SecurityFormValues) {
    this.securityForm.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnDestroy() {

  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  writeValue(obj: any) {
    if (obj) {
      this.value = obj;
    }
    if (obj === null) {
      this.securityForm.reset();
    }
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}

class SecurityFormValues implements UserSecurity {
  password: string;
}

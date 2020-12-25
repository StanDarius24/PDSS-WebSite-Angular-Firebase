import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {UserProfile} from '../../core/models/user-profile.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: [
    '../style/style.scss',
    './profile-form.component.css'
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProfileFormComponent),
      multi: true
    }
  ]
})
export class ProfileFormComponent implements OnInit, ControlValueAccessor, OnDestroy {
  profileForm: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: ''
    });

    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.profileForm.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  get value(): ProfileFormValues {
    return this.profileForm.value;
  }

  set value(value: ProfileFormValues) {
    this.profileForm.setValue(value);
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
      this.profileForm.reset();
    }
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}

class ProfileFormValues implements UserProfile {
  firstName: string;
  lastName: string;
  email: string;
}

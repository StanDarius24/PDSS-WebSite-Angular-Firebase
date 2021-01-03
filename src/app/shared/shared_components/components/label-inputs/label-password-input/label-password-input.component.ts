import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-password-input',
  templateUrl: './label-password-input.component.html',
  styleUrls: [
    './label-password-input.component.scss'
  ]
})
export class LabelPasswordInputComponent implements OnInit {
  private _label: string;

  constructor() { }

  ngOnInit(): void {
  }

  get label(): string {
    return this._label;
  }

  @Input() set label(value: string) {
    this._label = value;
  }
}

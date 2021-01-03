import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label-text-input',
  templateUrl: './label-text-input.component.html',
  styleUrls: [
    './label-text-input.component.scss'
  ]
})
export class LabelTextInputComponent implements OnInit {
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

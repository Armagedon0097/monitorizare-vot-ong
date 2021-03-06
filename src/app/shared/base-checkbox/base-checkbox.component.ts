import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

export enum CHECKBOX_VARIANTS {
  FILLED,

}

@Component({
  selector: 'app-base-checkbox',
  templateUrl: './base-checkbox.component.html',
  styleUrls: ['./base-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseCheckboxComponent implements OnInit {
  @Input() name: any;
  @Input() forceCheck = false;

  @Output() checkboxChanged = new EventEmitter();

  @HostListener('click', ['$event'])
  onHostClick (ev: Event) {
    return false;
  }

  constructor() { }

  ngOnInit(): void {
  }

  checkBoxChanged () {
    this.checkboxChanged.next()
  }
}

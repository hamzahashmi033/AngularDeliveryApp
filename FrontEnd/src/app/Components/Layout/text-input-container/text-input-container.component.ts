import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input-container',
  templateUrl: './text-input-container.component.html',
  styleUrls: ['./text-input-container.component.css']
})
export class TextInputContainerComponent {
  @Input()
  control!:AbstractControl;
  @Input()
  showErrorWhen:boolean = true;
  @Input()
  label!: string;
  @Input()
  type: 'text' | 'password' | 'email' = 'text';
  
  get formControl(){
    return this.control as FormControl;
  }
}

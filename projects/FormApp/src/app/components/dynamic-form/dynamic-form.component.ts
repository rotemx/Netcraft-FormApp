import {Component, Input, OnInit} from '@angular/core';
import {DynamicForm}              from '../../types/interfaces/dynamic-form';
import {FormControl, FormGroup}   from '@angular/forms';
import {DynamicField}             from '../../types/interfaces/dynamic-field';

@Component({
  selector   : 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls  : ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() form: DynamicForm;

  formGroup: FormGroup;

  constructor() {
    window['dynamicFormComponent'] = this;
  }

  ngOnInit(): void {
    const sectionControls = this.form.sections.reduce((dict: any, section, i, arr) => {
      const fieldControls = section.fields
                                   .reduce((dict: any, field: DynamicField, i, array) => {
                                     dict[field.propertyName] = new FormControl('', field.validators || []);
                                     return dict;
                                   }, {});
      dict[section.propertyName] = new FormGroup(fieldControls);
      return dict;
    }, {});
    this.formGroup = new FormGroup(sectionControls);
  }

}

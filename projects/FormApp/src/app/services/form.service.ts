import {Injectable}  from '@angular/core';
import {Validators}  from '@angular/forms';
import {DynamicForm} from '../types/interfaces/dynamic-form';
import {FieldTypes}  from '../types/enums/field-types';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() {
    window['formService'] = this;
  }

  getConfigJson() {
    return JSON.stringify(this.forms);
  }

  saveConfigJson(json: string) {
    this.forms = JSON.parse(json);

  }

  forms: DynamicForm[] = [{
    title   : 'New User',
    sections: [
      {
        propertyName: 'details',
        title       : 'User Details',
        fields      : [
          {
            type        : FieldTypes.Text,
            placeholder : 'enter first name',
            label       : 'First Name',
            propertyName: 'firstName',
            validators  : [Validators.minLength(5)]
          },
          {
            type        : FieldTypes.Text,
            placeholder : 'enter last name',
            label       : 'Last Name',
            propertyName: 'lastName'
          },
          {
            type        : FieldTypes.Color,
            label       : 'Favorite Color',
            propertyName: 'favoriteColor'
          }
        ]

      },
      {
        propertyName: 'work',
        title       : 'Work',
        fields      : [
          {
            type        : FieldTypes.Text,
            placeholder : 'Enter Employer Name',
            label       : 'Employer Name',
            propertyName: 'employerName',
            validators  : []
          },
          {
            type        : FieldTypes.Text,
            placeholder : 'Enter Work Address',
            label       : 'Work Address',
            propertyName: 'workAddress'
          }
        ]
      }]
  }];
}

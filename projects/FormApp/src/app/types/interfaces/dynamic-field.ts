import {FieldTypes} from '../enums/field-types';

export interface DynamicField {
  type: FieldTypes
  propertyName: string;
  label: string;
  placeholder?: string;
  validators?: string[]
  required?: boolean
}


import {Injectable}  from '@angular/core';
import {ValidatorFn} from '@angular/forms';

export enum FieldTypes {
  Text   = 'text',
  Number = 'number',
  Color  = 'color'
}

export interface Field {
  type: FieldTypes
  prop: string
  disabled : boolean
  validators : ValidatorFn[]
}


export interface DynamicSection {
  title:string
  fields: Field[]
  okFn?: () => Promise<any>
  prop:string
}

export interface DynamicForm {
  name: string
  sections: DynamicSection[]
}


export interface IConfig {
  forms: DynamicForm[]
}


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() {
  }


  config: IConfig = {};
}

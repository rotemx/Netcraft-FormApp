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
  disabled?: boolean
  validators?: ValidatorFn[]
}


export interface DynamicSection {
  title: string
  fields: Field[]
  okFn?: () => Promise<any>
  prop: string
}

export interface DynamicForm {
  name: string
  sections: DynamicSection[]
}


export interface IConfig {
  forms?: DynamicForm[]
}


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() {
    window['formService'] = this;
  }

  getConfigJson (){
    return JSON.stringify(this.config)
  }

  saveConfigJson(json:string){
    this.config = JSON.parse(json);

  }

  config: IConfig = {
    forms: [{
      name    : 'User',
      sections: [{
        title : 'General',
        prop  : 'general',
        fields: [{
          prop: 'name',
          type: FieldTypes.Text
        }]
      }]
    }]
  };
}

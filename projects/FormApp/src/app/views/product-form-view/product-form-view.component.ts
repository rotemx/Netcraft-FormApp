import {Component, OnInit} from '@angular/core';
import {DynamicForm}       from '../../types/interfaces/dynamic-form';
import {FieldTypes}        from '../../types/enums/field-types';


export interface Product {
  id: string
  name: string
  description?: string
  price: number
  count: number
  color?: string
  rating?: 0 | 1 | 2 | 3 | 4 | 5
}

@Component({
  selector   : 'app-product-form-view',
  templateUrl: './product-form-view.component.html',
  styleUrls  : ['./product-form-view.component.css']
})
export class ProductFormViewComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  productForm: DynamicForm = {
    title   : 'Product Form',
    sections: [
      {
        propertyName: 'general',
        title       : 'General',
        fields      : [
          {
            propertyName: 'id',
            label       : 'Product Id',
            placeholder : 'enter ID',
            type        : FieldTypes.Text,
            required : true
          },
          {
            propertyName: 'name',
            label       : 'Product Name',
            placeholder : 'enter name',
            type        : FieldTypes.Text,
            required : true
          },
          {
            propertyName: 'price',
            label       : 'Price',
            placeholder : 'enter price',
            type        : FieldTypes.Number,
            required : true
          }
        ]
      },
      {
        propertyName: 'details',
        title       : 'Product Details',
        fields      : [
          {
            propertyName: 'count',
            label       : 'count',
            placeholder : 'enter count',
            type        : FieldTypes.Number
          },
          {
            propertyName: 'rating',
            label       : 'Product Id',
            placeholder : 'enter rating',
            type        : FieldTypes.Number
          },
          {
            propertyName: 'color',
            label       : 'Color',
            placeholder : 'choose color',
            type        : FieldTypes.Color
          }

        ]
      }
    ]
  };
}

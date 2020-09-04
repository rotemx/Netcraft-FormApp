import { Component, OnInit } from '@angular/core';
import {FormService}         from '../../services/form.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {

  constructor(public formService:FormService) { }

  ngOnInit(): void {
  }

}

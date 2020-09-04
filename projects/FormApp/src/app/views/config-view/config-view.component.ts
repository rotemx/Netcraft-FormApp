import { Component, OnInit } from '@angular/core';
import {FormService}         from '../../services/form.service';

@Component({
  selector: 'app-config-view',
  templateUrl: './config-view.component.html',
  styleUrls: ['./config-view.component.css']
})
export class ConfigViewComponent implements OnInit {

  constructor(public formService:FormService) { }

  ngOnInit(): void {
  }

}

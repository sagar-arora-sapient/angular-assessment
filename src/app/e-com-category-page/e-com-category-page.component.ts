import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-e-com-category-page',
  templateUrl: './e-com-category-page.component.html',
  styleUrls: ['./e-com-category-page.component.css']
})
export class EComCategoryPageComponent implements OnInit {

  grid = true;
  divData = ([...Array(40).fill('Div')]);
    
  ngOnInit(): void {
  }

  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      type: ['', Validators.required]
    });
  }
}

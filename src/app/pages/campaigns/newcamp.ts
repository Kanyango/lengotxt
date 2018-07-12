import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'newcamp-component',
    templateUrl: 'newcamp.html'
})

export class NewCampsComponent
{
    campaignForm: FormGroup;
    date = '';
    mode ='date';
    firstDayOfWeek = 0;
    constructor(
    private fb: FormBuilder)
    {
        this.createCampForm();
    }
    
     createCampForm() {
        this.campaignForm = this.fb.group({
              campaign_name : ['', Validators.required],
              campaign_owner: ['', Validators.required],
              start_date    : ['', Validators.required],
              end_date      : ['', Validators.required],
              campaign_keyword: ['', Validators.required],
              campaing_shortcode: ['', Validators.required]
            });
  }
  onSubmit()
  {}
}
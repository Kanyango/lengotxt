import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'newalert-component',
    templateUrl: 'newalert.html'
})

export class NewAlertsComponent
{
    alertForm: FormGroup;
    date = '';
    mode ='date'
    firstDayOfWeek = 0;
    constructor(
    private fb: FormBuilder)
    {
        this.createAlertForm();
    }
    
     createAlertForm() {
        this.alertForm = this.fb.group({
              alert_title   : ['', Validators.required],
              alert_owner   : ['', Validators.required],
              start_date    : ['', Validators.required],
              end_date      : ['', Validators.required],
              alert_note    : ['', Validators.required],
              alert_target  : ['', Validators.required],
              alert_shortcode: ['', Validators.required]
            });
  }

 onSubmit()
 {}
}
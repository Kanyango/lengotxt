import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'compe-component',
    templateUrl: 'newcompe.html'
})

export class NewCompeComponent
{
    compeForm: FormGroup;
    date = '';
    firstDayOfWeek = 0;
    mode ='date'
    
    constructor(private fb: FormBuilder)
    {
        this.createCompeForm();
    }
    
     createCompeForm() {
        this.compeForm = this.fb.group({
              compe_name : ['', Validators.required],
              start_date : ['', Validators.required],
              owner      : ['', Validators.required],
              end_date   : ['', Validators.required],
              competition_shortcode : ['', Validators.required]
            });
  }

  onSubmit()
  {}
}
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'supply-component',
    templateUrl: 'supply.html'
})

export class SupplyChainComponent
{
    shopForm: FormGroup;
    date = '';
    mode ='date'
    
    constructor(private fb: FormBuilder)
    {
        this.createShopForm();
    }
    
     createShopForm() 
     {
        this.shopForm = this.fb.group({
        
              shop_name      : ['', Validators.required],
              shop_user_date : ['', Validators.required],
              owner          : ['', Validators.required],
              end_date       : ['', Validators.required],
              competition_shortcode : ['', Validators.required]
              
            });
      }
}
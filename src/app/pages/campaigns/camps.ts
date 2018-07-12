import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'camps-component',
    templateUrl: 'camps.html'
})

export class CampsComponent implements OnInit
{
    campaigns = [{ name: 'SMS JOIN and win Airtime', owner: 'Marketing Manager', shortcode: '22950' }]
    
    ngOnInit()
    {
        
    }
}
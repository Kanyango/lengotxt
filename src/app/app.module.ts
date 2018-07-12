import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';
import {
    FormsModule,
    FormGroup,
    FormControl
} from '@angular/forms';

import {SuiModule} from 'ng2-semantic-ui';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule }   from './app-routing.module';
import { DashComponent } from './pages/dashboard/dash';
import { NavbarComponent } from './pages/navbar/navbar';
import { NoActivityComponent } from './pages/noactivity/noactivity';
import { CampsComponent } from './pages/campaigns/camps';
import { NewCampsComponent } from './pages/campaigns/newcamp';
import { OneCampComponent } from './pages/campaigns/onecamp';
import { NewCompeComponent } from './pages/compe/newcompe';
import { CompesComponent } from './pages/compe/compes';
import { OneCompeComponent } from './pages/compe/onecompe';
import { SurveysComponent } from './pages/surveys/surveys';
import { OneSurveyComponent } from './pages/surveys/onesurvey';
import { NewSurveyComponent } from './pages/surveys/newsurvey';
import { AlertsComponent } from './pages/alerts/alerts';
import { SettingsComponent } from './pages/settings/settings';
import { NewAlertsComponent } from './pages/alerts/newalert';
import { DashSupplyChainComponent } from './pages/supply_chain/dash';
import { SupplyChainComponent } from './pages/supply_chain/supply';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    NavbarComponent,
    NoActivityComponent,
    CampsComponent,
    NewCampsComponent,
    OneCampComponent,
    NewCompeComponent,
    CompesComponent,
    OneCompeComponent,
    SurveysComponent,
    NewSurveyComponent,
    AlertsComponent,
    SettingsComponent,
    NewAlertsComponent,
    DashSupplyChainComponent,
    SupplyChainComponent,
    OneSurveyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

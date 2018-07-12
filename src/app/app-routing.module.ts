import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './pages/dashboard/dash';
import { CampsComponent } from './pages/campaigns/camps';
import { NewCampsComponent } from './pages/campaigns/newcamp';
import { OneCampComponent } from './pages/campaigns/onecamp';
import { NewCompeComponent } from './pages/compe/newcompe';
import { CompesComponent } from './pages/compe/compes';
import { OneCompeComponent } from './pages/compe/onecompe';
import { SurveysComponent } from './pages/surveys/surveys';
import { NewSurveyComponent } from './pages/surveys/newsurvey';
import { AlertsComponent } from './pages/alerts/alerts';
import { NewAlertsComponent } from './pages/alerts/newalert';
import { SettingsComponent } from './pages/settings/settings';
import { DashSupplyChainComponent } from './pages/supply_chain/dash';
import { SupplyChainComponent } from './pages/supply_chain/supply';

const routes: Routes = [

               { path: 'dash', component: DashComponent },
               { path: 'campaigns', component: CampsComponent },
               { path: 'newcamp', component: NewCampsComponent },
               { path: 'onecamp', component: OneCampComponent },
               { path: 'newcompe', component: NewCompeComponent },
               { path: 'competitions', component: CompesComponent },
               { path: 'competition', component: OneCompeComponent },
               { path: 'surveys', component: SurveysComponent },
               { path: 'newsurvey', component: NewSurveyComponent },
               { path: 'alerts', component: AlertsComponent },
               { path: 'settings', component: SettingsComponent },
               { path: 'newalert', component: NewAlertsComponent },
               { path: 'supplydash', component: DashSupplyChainComponent },
               { path: 'supply', component: SupplyChainComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
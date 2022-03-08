import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main.component';
import { MaterialModule } from './material.module';
import { NFTComponent } from './components/nft/nft.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { BlockchainService } from 'src/services/blockchain.services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './components/dialog/dialog.component';
import { LoginService } from 'src/services/loginService.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
	{ path: '', component: MainComponent },
  { path: 'nft', component:  NFTComponent},
	{ path: '**', redirectTo: '/', pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,MainComponent,DialogComponent,
    NFTComponent,SidebarComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    MatDialogModule,MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [BlockchainService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

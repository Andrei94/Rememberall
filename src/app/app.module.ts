import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RemarksListComponent} from './remarks-list/remarks-list.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login-component/login.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {path: 'allRemarks', component: RemarksListComponent},
  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  declarations: [
    AppComponent,
    RemarksListComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

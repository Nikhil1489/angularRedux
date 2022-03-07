import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponentComponent } from './counter-component/counter-component.component';
import { counterReducer } from './reducers/counter.reducer';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './effects/users.effect';
import { usersReducer } from './reducers/users.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponentComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer, usersCore: usersReducer }),
    EffectsModule.forRoot([UsersEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

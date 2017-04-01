import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';

import { TrimTextPipe } from './pipes/trimText.pipe';
import { ClosedCountPipe } from './pipes/closedCount.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    //AppComponent
    BugTrackerComponent,
    TrimTextPipe,
    ClosedCountPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [BugTrackerComponent]
})
export class AppModule { }

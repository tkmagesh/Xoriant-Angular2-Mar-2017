import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UtilsModule } from '../utils/utils.module';

//importing components
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { BugStatsComponent } from './bug-tracker/components/bug-stats/bugStats.component';
import { BugEditComponent } from './bug-tracker/components/bug-edit/bugEdit.component';
import { BugSortComponent } from './bug-tracker/components/bug-sort/bugSort.component';
import { BugListComponent } from './bug-tracker/components/bug-list/bugList.component';

//importing pipes
import { ClosedCountPipe } from './pipes/closedCount.pipe';

//importing services
import { BugStorage } from './services/bugStorage.service';
import { BugOperations } from './services/bugOperations.service';

@NgModule({
  declarations: [
    //AppComponent
    BugTrackerComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent,
    BugSortComponent,
    BugListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilsModule
  ],
  providers: [
    BugStorage,
    BugOperations
  ],
  bootstrap: [BugTrackerComponent]
})
export class AppModule { }

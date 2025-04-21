import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {AppComponent} from './app.component';
import {UsersMatSortComponent} from './users-mat-sort.component';
import {UsersComponent} from './users.component';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import {MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator'
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import {MatLegacyOptionModule as MatOptionModule} from '@angular/material/legacy-core'
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {MatSortModule} from "@angular/material/sort";
import {MatLegacyTabsModule as MatTabsModule} from "@angular/material/legacy-tabs";

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatTableModule,
      MatPaginatorModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatProgressSpinnerModule,
      MatButtonToggleModule,
      MatOptionModule,
      MatSelectModule,
      MatSortModule,
      MatTabsModule,
      MatSelectModule
  ],
  declarations: [ AppComponent, UsersMatSortComponent, UsersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list/person-list.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatRippleModule} from '@angular/material/core';
import {MatFormField, MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {FormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';

const routes: Routes = [
  {path: 'person', component: PersonListComponent},
  {path: '', redirectTo: 'person', pathMatch: 'full'},

];


@NgModule({
  declarations: [PersonListComponent, DialogBoxComponent],
  exports: [
    PersonListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRippleModule,
    FormsModule,
    MatListModule

  ]
})
export class PersonModule { }

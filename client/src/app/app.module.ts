import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SolutionComponent } from './components/solution/solution.component'
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatToolbarModule,
  MatExpansionModule,
  MatPaginatorModule
}
  from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [

    AppComponent,

    HomeComponent,

    SolutionComponent,

    AddDepartmentComponent,

    SearchComponent,
     


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCjA9p3fjmrFaFdPDW0mKkyfmUCLo2MweM',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

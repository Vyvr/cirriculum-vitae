import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideInformationComponent } from '@components/side-information/side-information.component';
import { MaterialModule } from '@shared/material.module';
import { WorkComponent } from '@components/work/work.component';
import { EducationComponent } from '@components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { OtherComponent } from '@components/other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    SideInformationComponent,
    OtherComponent,
    WorkComponent,
    EducationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

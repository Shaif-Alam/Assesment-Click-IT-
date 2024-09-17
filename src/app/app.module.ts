import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatrialModule } from './modules/matrial/matrial.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ServiceComponent } from './service/service.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { TestimonialSectionComponent } from './testimonial-section/testimonial-section.component';
import { FooterComponent } from './footer/footer.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    ServiceComponent,
    ChooseUsComponent,
    TestimonialSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,MatrialModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

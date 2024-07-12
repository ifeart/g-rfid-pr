import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { BigImageComponent } from './components/big-image/big-image.component';
import { DefaultButtonComponent } from './components/default-button/default-button.component';
import { DebugPageComponent } from './pages/debug-page/debug-page.component';
import { DefaultTextComponent } from './components/default-text/default-text.component';
import { Heading3Component } from './components/heading-3/heading-3.component';
import { Heading1Component } from './components/heading-1/heading-1.component';
import { PrinciplesComponent } from './pages/principles/principles.component';
import { ImplementationsComponent } from './pages/implementations/implementations.component';
import { ComparePageComponent } from './pages/compare-page/compare-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HistoryPageComponent,
    HeaderComponent,
    FooterComponent,
    BigImageComponent,
    DefaultButtonComponent,
    DebugPageComponent,
    DefaultTextComponent,
    Heading3Component,
    Heading1Component,
    PrinciplesComponent,
    ImplementationsComponent,
    ComparePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

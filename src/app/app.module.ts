import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// My modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';

// My components
import { AppComponent } from './app.component';
import { RemoveConfirmationDialogComponent } from './components/remove-confirmation-dialog/remove-confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RemoveConfirmationDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

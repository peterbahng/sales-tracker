import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { SubmitItemComponent } from './submit-item/submit-item.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { FooterComponent } from './footer/footer.component';
import { PreviewItemComponent } from './preview-item/preview-item.component';
import { MatListModule } from '@angular/material/list';
import { CompareMarketsComponent } from './compare-markets/compare-markets.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitItemComponent,
    ItemsListComponent,
    FooterComponent,
    PreviewItemComponent,
    CompareMarketsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatTableModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

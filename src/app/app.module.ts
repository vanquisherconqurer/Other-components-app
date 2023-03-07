import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { MatRadioModule } from '@angular/material/radio';
import { SlidetoggleComponent } from './slidetoggle/slidetoggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SliderComponent } from './slider/slider.component';
import { MatSliderModule } from '@angular/material/slider';
import { TabsComponent } from './tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TooltipComponent } from './tooltip/tooltip.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GridlistComponent } from './gridlist/gridlist.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { InputComponent } from './input/input.component';
import { MatInputModule } from '@angular/material/input';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { FormfieldComponent } from './formfield/formfield.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ChipsComponent } from './chips/chips.component';
import { MatChipsModule } from '@angular/material/chips';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RadiobuttonComponent,
    SlidetoggleComponent,
    SliderComponent,
    TabsComponent,
    TooltipComponent,
    GridlistComponent,
    InputComponent,
    TableComponent,
    FormfieldComponent,
    ChipsComponent,



  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTabsModule,
    MatTooltipModule,
    MatGridListModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

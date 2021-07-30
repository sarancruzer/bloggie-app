import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VerticalLayoutComponent } from './vertical-layout/vertical-layout.component';
import { HorizontalLayoutComponent } from './horizontal-layout/horizontal-layout.component';
import { MobileNavigationComponent } from './mobile-navigation/mobile-navigation.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    VerticalLayoutComponent,
    HorizontalLayoutComponent,
    MobileNavigationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { ParcelaListComponent } from './parecela-list/parcela-list.component';
import { ParcelaRegisterComponent } from './parcela-register/parcela-register.component';

import { ComponentsModule } from 'src/app/components/components.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DemoFlexyModule } from '../../demo-flexy-module';


@NgModule({
  declarations: [
    ParcelaListComponent,
    ParcelaRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgApexchartsModule,
    DemoFlexyModule,
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule, 
    MatCheckboxModule, 
    MatRadioModule, 
    MatButtonModule,
    MatDatepickerModule,
    ComponentsModule
  ],
  exports: [
    ParcelaListComponent,
    ParcelaRegisterComponent
  ]
})
export class ParcelaModule { }
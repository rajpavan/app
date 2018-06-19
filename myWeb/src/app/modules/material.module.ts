import { NgModule } from '@angular/core';
import { MatButtonModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatDividerModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDividerModule
  ],

  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDividerModule
  ]
})

export class MaterialModule { }

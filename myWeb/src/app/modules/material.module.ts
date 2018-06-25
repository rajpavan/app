import { NgModule } from '@angular/core';
import { MatButtonModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatDividerModule, MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule
  ],

  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule
  ]
})

export class MaterialModule { }

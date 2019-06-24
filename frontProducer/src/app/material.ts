import {
  MatDialogModule,
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTabsModule
} from "@angular/material";

import { MatSelectModule } from "@angular/material/select";

import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatChipsModule,
    MatTabsModule,
    MatSelectModule
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatChipsModule,
    MatTabsModule,
    MatSelectModule
  ]
})
export class MaterialModule {}

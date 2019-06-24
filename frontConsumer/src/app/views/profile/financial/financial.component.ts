import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})
export class FinancialComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<FinancialComponent>) { }

  closeModal() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PredictionService } from '../../service/prediction.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  stockPricePredictionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private predictionService: PredictionService
  ) {
    this.stockPricePredictionForm = this.fb.group({
      stockName: ['', Validators.required],
      tradeInterval: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.stockPricePredictionForm.valid) {
      this.predictionService
        .predictStockPrice(
          this.stockPricePredictionForm.value.stockName,
          this.stockPricePredictionForm.value.tradeInterval
        )
        .subscribe((response) => {
          console.log(response);
        });
    }
  }
}

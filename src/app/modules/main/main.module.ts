import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
  ],
  declarations: [MainComponent],
  exports: [MainComponent],
  providers: [
    {
      provide: MAT_SNACK_BAR_DATA,
      useValue: { uploadProgress: of({ loaded: 500, total: 2000 }) },
    },
  ],
})
export class MainModule {}

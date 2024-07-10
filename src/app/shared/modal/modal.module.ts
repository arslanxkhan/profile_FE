import { NgModule } from '@angular/core';
import { ProfileModalComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProfileModalComponent],
  imports: [ReactiveFormsModule, CommonModule,HttpClientModule],
  exports: [],
})
export class ModalModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [ ProfileRoutingModule,CommonModule],
  exports: [ProfileComponent],
})
export class ProfileModule {}

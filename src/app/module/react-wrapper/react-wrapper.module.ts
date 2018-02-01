import { NgModule } from '@angular/core';
import { ReactWrapperComponent } from './react-wrapper.component';

@NgModule({
  declarations: [ReactWrapperComponent],
  exports: [ReactWrapperComponent]
})
export class ReactWrapperModule {}

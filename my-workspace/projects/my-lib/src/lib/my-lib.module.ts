import {ModuleWithProviders, NgModule} from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import {IConfig} from './interfaces/config';
import {MY_LIB_CONFIG} from './my-lib-config';
import {MyLibService} from './services/my-lib.service';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [MyLibComponent],
  imports: [CommonModule],
  exports: [MyLibComponent],
  providers: [MyLibService]
})
export class MyLibModule {
  static forRoot(configuration: IConfig): ModuleWithProviders<MyLibModule> {
    return {
      ngModule: MyLibModule,
      providers: [
        {
          provide: MY_LIB_CONFIG,
          useValue: configuration
        }
      ]
    };
  }
}

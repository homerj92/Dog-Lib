import { InjectionToken } from '@angular/core';
import {IConfig} from './interfaces/config';

export const MY_LIB_CONFIG = new InjectionToken<IConfig>('config');

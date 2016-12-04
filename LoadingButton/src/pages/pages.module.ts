import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

import { IonicModule } from 'ionic-angular';

import { HomePage }      from './home/home';

import { LoadingButton } from '../loadingButton/loading.button.component';

@NgModule({
    imports:      [ 
        FormsModule,
        HttpModule,
        IonicModule.forRoot(HomePage)
    ],
    
    declarations: [
        HomePage,
        LoadingButton
    ],
    entryComponents: [
        HomePage
    ],
    exports:      [ ],
    providers:    [ ]
})
export class PagesModule { }

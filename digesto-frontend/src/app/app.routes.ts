import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoUsuarioLoginComponent } from './componentes/compo-usuario-login/compo-usuario-login.component';
import { CompoCaracteristicaComponent } from './componentes/compo-caracteristica/compo-caracteristica.component';
import { CompoDocumentoComponent } from './componentes/compo-documento/compo-documento.component';



//componente login
//componente caracteristica
//componente documento

const routes : Routes = [
{
    path: '',
},
{
    path: 'login',
    component: CompoUsuarioLoginComponent
},
{
    path: 'caracteristica',
    component: CompoCaracteristicaComponent
},
{
    path: 'documento',
    component : CompoDocumentoComponent
}
]

@NgModule({
    declarations :[
        AppComponent,
        CompoCaracteristicaComponent,
        CompoDocumentoComponent,
        CompoUsuarioLoginComponent,
        CompositionEvent
        ],
        imports : [
            BrowserModule,
            RouterModule.forRoot(routes)
        ],
        providers : [],
        bootstrap :[AppComponent]
    
})
export class AppModule { }

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { HomeComponent } from './components/home/home.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';

const appRouter: Routes = [
    { path: '', component: HomeComponent},
    { path: 'quienes-somos', component: QuienesSomosComponent},
    { path: 'contacto', component: ContactosComponent},
    { path: '**', component: HomeComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);

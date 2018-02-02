import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemoryComponent } from './memory/memory.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { MemoryDetailComponent } from './memory-detail/memory-detail.component';
import { MemoryCreateComponent } from './memory-create/memory-create.component';
import { MemoryEditComponent } from './memory-edit/memory-edit.component';


const appRoutes: Routes = [
  {
    path: 'memories',
    component: MemoryComponent,
    data: { title: 'Memories so far' }
  },
  {
    path: 'memory-details/:id',
    component: MemoryDetailComponent,
    data: { title: 'Memory Details' }
  },
  {
    path: 'memory-create',
    component: MemoryCreateComponent,
    data: { title: 'Create a memory' }
  },
  {
    path: 'memory-edit/:id',
    component: MemoryEditComponent,
    data: { title: 'Edit a Memory' }
  },
  { path: '',
    redirectTo: '/memories',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MemoryComponent,
    MemoryDetailComponent,
    MemoryCreateComponent,
    MemoryEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  	HttpClientModule,
  	RouterModule.forRoot(
	    appRoutes,
	    { enableTracing: true } // <-- debugging purposes only
	  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

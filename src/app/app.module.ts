import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MeComponent } from './me/me.component';
import { MyWorkComponent } from './mywork/mywork.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SitelayoutComponent } from './sitelayout/sitelayout.component';
import { ToolsComponent } from './tools/tools.component';
import { PostComponent } from './sitelayout/post/post.component';
import { MY_WORK_ROUTES } from './mywork/mywork.routes';

import { registerLocaleData } from '@angular/common';
import localeES from "@angular/common/locales/es";

registerLocaleData(localeES, "es");

const routes: Routes = [
  {path: '',
    children: [
      {path: '', component: SitelayoutComponent},
      {path: 'post/:id', component: PostComponent},
      {path: 'me', component: MeComponent, data: {title: 'Me'}},
      {path: 'my-work', data: {title: 'My work'},
        children: MY_WORK_ROUTES},
      {path: 'tools', component: ToolsComponent, data: {title: 'Tools'}},
      {path: '**', component: PageNotFoundComponent}
    ]}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MeComponent,
    MyWorkComponent,
    PageNotFoundComponent,
    SidebarComponent,
    SitelayoutComponent,
    ToolsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
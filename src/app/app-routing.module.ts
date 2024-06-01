import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { EventUserComponent } from './event-user/event-user.component';
import { EventComponent } from './event/event.component';



const routes: Routes = [
  {path: 'eventpanel', component:EventComponent} ,
  {path: 'calendar', component:CalendarComponent} ,
  {path: 'event', component:EventUserComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { EventService } from '../Shared/services/event.service';

@Component({
  selector: 'app-event-user',
  templateUrl: './event-user.component.html',
  styleUrls: ['./event-user.component.css']
})
export class EventUserComponent implements OnInit {
  public data : any = [];
  rating = 0;
  starCount = 5;
  ratingArr: boolean[] = []; 
  public myAngularxQrCode:any;
  div1:boolean=false;


  constructor(private eventservice :EventService) {this.ratingArr = Array(this.starCount).fill(false),this.myAngularxQrCode = this.generateRandomToken() }

  ngOnInit(): void {
   this.getAllEvents()
   
   
  }
  getAllEvents(){
    this.eventservice.getAllEvents()
    .subscribe({
      next:(res)=>{
        this.data = res;
        console.log(this.data)
        
        }})
  }

  onClick(i: number) {
    this.rating = i + 1;
    console.log(this.rating)

    };
    returnStar(i: number) {
      if (this.rating >= i + 1) {
        return 'star';
      } else {
        return 'star_border';
      }
    }

    participate(){
      this.div1=true

    }

    generateRandomToken(){
      var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
    }

   

}

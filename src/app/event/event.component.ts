import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { EventService } from 'src/app/Shared/services/event.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})



export class EventComponent implements OnInit {
  displayedColumns: string[] = ['title', 'creator', 'departement', 'image','start_date','end_date','status','location','particpants_number','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog :MatDialog , private eventservice :EventService) { }
  openDialog() {
    this.dialog.open(DialogComponent, {
     width:'30%'
    }).afterClosed().subscribe(
      {next:(res)=>{
        this.getAllEvents();
      }}
    )
  };
    
    getAllEvents(){
      this.eventservice.getAllEvents()
      .subscribe({
        next:(res)=>{
          this.dataSource=new MatTableDataSource(res);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort}})
    };
    
    deleteEvent(id:number){
      this.eventservice.deleteEvent(id)
      .subscribe({next:(res)=>{
        this.getAllEvents();
      }})

    }


    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    editEvent(row :any){
      this.dialog.open(DialogComponent,{
        width:'30%'
        ,data:row}).afterClosed().subscribe(val=>{
          
            this.getAllEvents();
          
        })

    }

  ngOnInit(): void {
    this.getAllEvents();
  }

}


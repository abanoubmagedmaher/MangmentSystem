import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent {
  constructor(private fb:FormBuilder , public dialog: MatDialogRef<any> , public matDialog:MatDialog) { }

  users:any = [
    {name:"Moahmed" , id:1},
    {name:"Ali" , id:2},
    {name:"Ahmed" , id:3},
    {name:"Zain" , id:4},
  ]

  newTaskForm!:FormGroup
  ngOnInit(): void {
  }

  createForm(){
    this.newTaskForm = this.fb.group({
      
    })
  }
}


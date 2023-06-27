import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  message= "No mesage yet!"
  boxtitles:string[]=["Electronics","Sports","Computer Languages","Spoken Languages","Countries"]
  boxitems:string[][] =[
    ["Pendrive","Laptop","Mobile"],
    ["Tennis", "Cricket", "Soccer"],
    ["Java","Python","PHP"],
    ["Tamil","English","French"],
    ["India","Japan","Mangolia","China"]
  ]

  processMessage(data:string,box:string) {
     this.message = data + " is selected from box "+box
  }
}

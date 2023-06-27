import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  boxtitles:string[]=["Electronics","Sports","Computer Languages","Spoken Languages","Countries"]
  boxitems:string[][] =[
    ["Pendrive","Laptop","Mobile"],
    ["Tennis", "Cricket", "Soccer"],
    ["Java","Python","PHP"],
    ["Tamil","English","French"],
    ["India","Japan","Mangolia","China"]
  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
    btitle:string= "notitle"
    items:string[]=["item1","item2","item3"]
    boxStyle:any={
       fontFamily: 'Arial'
    }

    onFontChange(font:string){
       this.boxStyle = {fontFamily: font}
    }
}

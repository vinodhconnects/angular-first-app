import { Component ,Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
    @Input('title') btitle:string= "notitle"
    @Input() items:string[]=["item1","item2","item3"]
    current:string= '#2E4053'
    boxStyle:any={
       fontFamily: 'Arial',
      
    }

     @Output("itemselect") sendItem:EventEmitter<string> = new EventEmitter<string>()
    
     onFontChange(font:string):void{
       this.boxStyle = {fontFamily: font}
    }
    onItemSelect(item:string):void {
       this.sendItem.emit(item)
    }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit{

  @Input() panelOpenState = false;
  @Output() emitPanel = new EventEmitter<any>()

  constructor() {}

  ngOnInit(): void {
    
  }

  emitePanel(){
    this.emitPanel.emit(true);
  }

}

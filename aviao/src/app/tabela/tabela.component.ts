import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/interfaces/item.interface';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit{

  @Input() itens: Item[] = []
  @Output() emitExcluir = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.itens);
  }

  delete(index:any) {
    this.emitExcluir.emit(index)
  }

}

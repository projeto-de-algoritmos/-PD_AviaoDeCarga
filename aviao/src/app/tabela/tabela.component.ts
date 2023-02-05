import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/interfaces/item.interface';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit{

  cargaTotal = 0;

  @Input() itens: Item[] = []
  @Output() emitExcluir = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }

  delete(index:any) {
    this.emitExcluir.emit(index)
  }

  getColor(){
    let soma = this.itens.reduce((total, current) => total + current.peso, 0);
    this.cargaTotal = soma;
    return (this.cargaTotal>500) ? 'mt-4 font-medium text-red-500' : 'mt-4 font-medium text-green-700';
  }

}

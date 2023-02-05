import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Item } from 'src/interfaces/item.interface';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  itens: Item[] = [
    {
      nome: 'carga 1',
      peso: 10,
      valor: 25.50,
    },{
      nome: 'carga 2',
      peso: 5,
      valor: 10,
    },
  ];

  dialogOpen = false;
  panelOpenState = false;

  constructor(
    private _dialog: MatDialog,
  ) { }
  
  ngOnInit(): void {

    // for(let i=3; i<1000; i++){
    //   this.itens.push({
    //     nome: `carga ${i}`,
    //     peso: 10,
    //     valor: 25.50,
    //   })
    // }
    
  }

  updatePanel(event: any){
    this.panelOpenState = event
  }

  setPanel() {
      this.panelOpenState = false;
  }

  abrirForm() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.position = {
      left: '35%',
      top: '-40rem'
    };
    dialogConfig.disableClose = true;
    dialogConfig.backdropClass = 'disable-backdrop'

    this.dialogOpen = true;

    const dialogRef = this._dialog.open(FormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(( item ) => {
      if(item){
        this.itens.push(item)
      }

      this.dialogOpen = false
    });
  }

  deletaItem(index: any) {
    this.itens.splice(index, 1);
  }
  
  knapsack(itens: Item[], capacidade: number): { valor: number, itens: Item[] } {
      const n = itens.length;
      const opt: number[][] = Array(n + 1).fill(null).map(() => Array(capacidade + 1).fill(0));
      const itensSelecionados: Item[][][] = Array(n + 1).fill(null).map(() => Array(capacidade + 1).fill(null).map(() => []));
  
      for (let i = 1; i <= n; i++) {
          for (let j = 0; j <= capacidade; j++) {
              if (itens[i - 1].peso > j) {
                  opt[i][j] = opt[i - 1][j];
                  itensSelecionados[i][j] = itensSelecionados[i - 1][j];
              } else {
                  const semItem = opt[i - 1][j];
                  const comItem = Number(opt[i - 1][j - itens[i - 1].peso]) + Number(itens[i - 1].valor);
                  if (comItem > semItem) {
                      opt[i][j] = comItem;
                      itensSelecionados[i][j] = [...itensSelecionados[i - 1][j - itens[i - 1].peso], itens[i - 1]];
                  } else {
                      opt[i][j] = semItem;
                      itensSelecionados[i][j] = itensSelecionados[i - 1][j];
                  }
              }
          }
      }
  
      return { valor: opt[n][capacidade], itens: itensSelecionados[n][capacidade] };
  }

  selecionarItens(){
    this.setPanel();

    let aux = this.knapsack(this.itens, 500);
    console.log(aux);
  }

}

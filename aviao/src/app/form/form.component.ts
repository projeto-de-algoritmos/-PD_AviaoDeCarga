import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Item } from 'src/interfaces/item.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  novoItem!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    private _fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.novoItem = this._fb.group({
      nome: ['', Validators.required],
      peso: [,[Validators.required, Validators.pattern("^[0-9]*$")]],
      valor: [,[Validators.required, Validators.pattern("^[0-9]+(.[0-9]{1,2})?$")]],
    });
    
  }

  adicionar(){
    let nome = this.novoItem.controls['nome'].value;
    let peso = this.novoItem.controls['peso'].value;
    let valor = this.novoItem.controls['valor'].value;
    this.sairModal({nome, peso, valor});
  }

  private sairModal(item: Item): void {
    
    this.dialogRef.close(item);
  }

}

import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { Tienda } from '../models/tienda.model';

@Component({
	selector: 'app-con-estado',
	templateUrl: './con-estado.component.html',
	styleUrls: ['./con-estado.component.css']
})
export class ConEstadoComponent implements OnInit {

	modeloTienda: Tienda = new Tienda();
	itemsComprados: Array<Producto>;

	constructor() {
		this.itemsComprados = [];
	}

	ngOnInit() {
	}

	seleccionarItem(item) {
		this.itemsComprados.push(item)
	}

}

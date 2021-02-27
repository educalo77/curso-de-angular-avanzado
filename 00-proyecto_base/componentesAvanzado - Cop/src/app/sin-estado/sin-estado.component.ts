import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Component({
	selector: 'app-sin-estado',
	templateUrl: './sin-estado.component.html',
	styleUrls: ['./sin-estado.component.css']
})
export class SinEstadoComponent implements OnInit {
	@Input() producto: Producto;

	private disabled: boolean;
	public accionCompra: string;

	constructor() {

	}

	ngOnInit() {
		this.accionCompra = `BUY FOR $${this.producto.precio}`;
	}
	seleccionarItem() {
		this.disabled = true;
		this.accionCompra = "ADDED TO CART";
	}
	isItemDisabled() {
		return !!this.disabled;
	}
}

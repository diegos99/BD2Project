package net.guides.springboot.crud.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Venta")
public class Venta {
	@Id
	private int id;
	private String cliente;
	private String repuesto;
	private String cantidad;
	private String total;

	public Venta(int id, String cliente, String repuesto, String cantidad, String total) {
		this.id = id;
		this.cliente = cliente;
		this.repuesto = repuesto;
		this.cantidad = cantidad;
		this.total = total;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCliente() {
		return cliente;
	}

	public void setCliente(String cliente) {
		this.cliente = cliente;
	}

	public String getRepuesto() {
		return repuesto;
	}

	public void setRepuesto(String repuesto) {
		this.repuesto = repuesto;
	}

	public String getCantidad() {
		return cantidad;
	}

	public void setCantidad(String cantidad) {
		this.cantidad = cantidad;
	}

	public String getTotal() {
		return total;
	}

	public void setTotal(String total) {
		this.total = total;
	}

	@Override
	public String toString() {
		return "Venta [id=" + id + ", cliente=" + cliente + ", repuesto=" + repuesto + ", cantidad=" + cantidad
				+ ", total=" + total + "]";
	}


}

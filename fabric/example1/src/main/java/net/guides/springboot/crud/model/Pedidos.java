package net.guides.springboot.crud.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Pedidos")
public class Pedidos {
	@Id
	private int id;
	private String fechaEnvio;
	private String producto;
	private String descripcion;
	private String cantidad;

	public Pedidos() {
		
	}
	
	public Pedidos(int id, String fechaEnvio, String producto, String descripcion, String cantidad) {
		this.id = id;
		this.fechaEnvio = fechaEnvio;
		this.producto = producto;
		this.descripcion = descripcion;
		this.cantidad = cantidad;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFechaEnvio() {
		return fechaEnvio;
	}

	public void setFechaEnvio(String fechaEnvio) {
		this.fechaEnvio = fechaEnvio;
	}

	public String getProducto() {
		return producto;
	}

	public void setProducto(String producto) {
		this.producto = producto;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getCantidad() {
		return cantidad;
	}

	public void setCantidad(String cantidad) {
		this.cantidad = cantidad;
	}

	@Override
	public String toString() {
		return "Pedidos [id=" + id + ", fechaEnvio=" + fechaEnvio + ", producto=" + producto + ", descripcion="
				+ descripcion + ", cantidad=" + cantidad + "]";
	}
	
	
}

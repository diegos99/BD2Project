package net.guides.springboot.crud.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "Carro")
public class Carro {
	private int id;
	private String marca;
	private String linea;
	private String anio;
	
	public Carro(int id, String marca, String linea, String anio) {
		this.id = id;
		this.marca = marca;
		this.linea = linea;
		this.anio = anio;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getLinea() {
		return linea;
	}

	public void setLinea(String linea) {
		this.linea = linea;
	}

	public String getAnio() {
		return anio;
	}

	public void setAnio(String anio) {
		this.anio = anio;
	}

	@Override
	public String toString() {
		return "Carro [id=" + id + ", marca=" + marca + ", linea=" + linea + ", anio=" + anio + "]";
	}
	
	
}

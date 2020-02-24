package com.fabrica.Document;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Post")

public class Post {
	
	
	@Id
	private String id = new ObjectId().toString();
	private String nombre;
	private String password;
	
	//constructor
	public Post() {	
	}
	public Post(String nombre, String password){
		this.nombre = nombre;
		this.password = password;
	}
	
	//getter and setters
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}

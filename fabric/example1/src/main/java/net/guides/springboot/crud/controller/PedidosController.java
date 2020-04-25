package net.guides.springboot.crud.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.guides.springboot.crud.exception.ResourceNotFoundException;
import net.guides.springboot.crud.model.Pedidos;
import net.guides.springboot.crud.repository.PedidosRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class PedidosController {
	@Autowired
	private PedidosRepository repository;

	@PostMapping("/pedido")
	public String placeOrder(@RequestBody Pedidos pedidos) {
		repository.save(pedidos);
		return "Pedido placed successfully...";
	}

	@GetMapping("/pedido")
	public List<Pedidos> getAllProductos() {
		return repository.findAll();
	}

	@GetMapping("/pedido/{id}")
	public ResponseEntity<Pedidos> getProductoById(@PathVariable(value = "id") Long productoId)
			throws ResourceNotFoundException {
		Pedidos pedidos = repository.findById(productoId)
				.orElseThrow(() -> new ResourceNotFoundException("PEdido not found for this id :: " + productoId));
		return ResponseEntity.ok().body(pedidos);
	}

	@PutMapping("/pedido/{id}")
	public ResponseEntity<Pedidos> updateProducto(@PathVariable(value = "id") Long productoId,

			@Valid @RequestBody Pedidos productoDetails) throws ResourceNotFoundException {
		Pedidos pedidos = repository.findById(productoId)
				.orElseThrow(() -> new ResourceNotFoundException("Pedido not found for this id :: " + productoId));

		pedidos.setFechaEnvio(productoDetails.getFechaEnvio());
		pedidos.setProducto(productoDetails.getProducto());
		pedidos.setDescripcion(productoDetails.getDescripcion());
		pedidos.setCantidad(productoDetails.getCantidad());
		final Pedidos updatedProducto = repository.save(pedidos);
		return ResponseEntity.ok(updatedProducto);
	}

	@DeleteMapping("/pedido/{id}")
	public Map<String, Boolean> deleteProducto(@PathVariable(value = "id") Long productoId)
			throws ResourceNotFoundException {
		Pedidos pedidos = repository.findById(productoId)
				.orElseThrow(() -> new ResourceNotFoundException("Pedido not found for this id :: " + productoId));

		repository.delete(pedidos);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}

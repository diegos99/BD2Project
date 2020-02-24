package com.fabrica;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan(basePackages = { "com.fabrica.RestRepository", "com.fabrica.Controller" })
public class FabricaApplication {

	public static void main(String[] args) {
		SpringApplication.run(FabricaApplication.class, args);
	}

}

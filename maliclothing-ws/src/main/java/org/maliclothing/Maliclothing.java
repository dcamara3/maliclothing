package org.maliclothing;

import org.maliclothing.configuration.JpaConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Import(JpaConfiguration.class)
@SpringBootApplication(scanBasePackages = { "com.websystique.springboot" })
public class Maliclothing {

	public static void main(String[] args) {
		SpringApplication.run(Maliclothing.class, args);
	}

//	public WebMvcConfigurer corsConfigurer() {
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/maliclothing/product/**").allowedOrigins("http://localhost:4200");
//			}
//		};
//	}
}
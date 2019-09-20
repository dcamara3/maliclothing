package org.mandedev.com;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.mandedev.com.dao.CustomerRepository;
import org.mandedev.com.entity.Customer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
//@ComponentScan("org.mandedev.com")
//@Configuration
public class MaliClothingWSApplication {

	public static void main(String[] args) {
		SpringApplication.run(MaliClothingWSApplication.class, args);
	}
	
	@RestController
	public class GreetingController {

		private static final String template = "Hello, %s!";
		private final AtomicLong counter = new AtomicLong();

		Logger logger = LoggerFactory.getLogger(GreetingController.class);
		
		@Autowired
		CustomerRepository customerRepository;
		
		@RequestMapping("/greeting/{id}")
		public List<Customer> greeting(@PathVariable(value = "id") Long id) {
			
			List<Customer> customers = new ArrayList<>();
			
			logger.info("Looking up id: " + id);
			customers.add(customerRepository.findOne(id));
			logger.info("# of customers: " + customers.size());
			
//			return new Greeting(counter.incrementAndGet(), String.format(template, name));
			return customers;
		}
		
		@RequestMapping("/test")
		public Greeting test(@RequestParam(value = "name", defaultValue = "World") String name) {
			return new Greeting(counter.incrementAndGet(), String.format(template, name));
		}
	}
	
}
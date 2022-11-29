package com.vishal.biddingPlatform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@EnableAutoConfiguration(exclude = {ErrorMvcAutoConfiguration.class})
public class BiddingPlatformApplication {

	public static void main(String[] args) {
		SpringApplication.run(BiddingPlatformApplication.class, args);
	}

}

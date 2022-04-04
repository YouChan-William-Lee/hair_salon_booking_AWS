package com.example.cloudcomputingassignment1.customer.api;

import com.example.cloudcomputingassignment1.customer.app.CustomerAppService;
import com.example.cloudcomputingassignment1.customer.domain.entity.Customer;
import com.example.cloudcomputingassignment1.customer.domain.infra.repository.CustomerRepository;
import com.example.cloudcomputingassignment1.customer.representation.CustomerRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    private final CustomerAppService customerAppService;

    public CustomerController(CustomerAppService customerAppService) {
        this.customerAppService = customerAppService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody CustomerRequest request) {
        Customer customer = customerAppService.findByCustomerEmail(request.getCustomerEmail());
        if (customer == null)
            customerAppService.save(request);
        return new ResponseEntity<>(request, HttpStatus.OK);
    }
}

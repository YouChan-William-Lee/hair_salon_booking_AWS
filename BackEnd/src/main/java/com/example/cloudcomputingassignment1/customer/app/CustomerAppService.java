package com.example.cloudcomputingassignment1.customer.app;

import com.example.cloudcomputingassignment1.customer.domain.entity.Customer;
import com.example.cloudcomputingassignment1.customer.domain.infra.CustomerCommandService;
import com.example.cloudcomputingassignment1.customer.representation.CustomerRequest;
import org.springframework.stereotype.Service;

@Service
public class CustomerAppService {

    private final CustomerCommandService customerCommandService;

    public CustomerAppService(CustomerCommandService customerCommandService) {
        this.customerCommandService = customerCommandService;
    }

    public void save(CustomerRequest request) {
        customerCommandService.save(Customer.of(request));
    }

    public Customer findByCustomerEmail(String customerEmail) {
        return customerCommandService.findByCustomerEmail(customerEmail);
    }
}

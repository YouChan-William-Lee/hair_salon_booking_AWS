package com.example.cloudcomputingassignment1.customer.domain.infra;

import com.example.cloudcomputingassignment1.customer.domain.entity.Customer;
import com.example.cloudcomputingassignment1.customer.domain.infra.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class CustomerCommandService {
    private final CustomerRepository repository;

    public CustomerCommandService(CustomerRepository repository) { this.repository = repository; }

    public void save(Customer customer) { repository.save(customer); }

    public Customer findByCustomerEmail(String customerEmail) {
        return repository.findByCustomerEmail(customerEmail);
    }
}

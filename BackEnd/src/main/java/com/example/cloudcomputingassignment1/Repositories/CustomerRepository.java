package com.example.cloudcomputingassignment1.Repositories;

import com.example.cloudcomputingassignment1.model.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {
    Customer findByCustomername(String customername);
}

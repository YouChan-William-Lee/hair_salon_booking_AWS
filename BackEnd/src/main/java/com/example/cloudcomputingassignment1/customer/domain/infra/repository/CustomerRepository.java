package com.example.cloudcomputingassignment1.customer.domain.infra.repository;

import com.example.cloudcomputingassignment1.customer.domain.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    @Query("SELECT s FROM Customer s WHERE s.customerEmail = ?1")
    Customer findByCustomerEmail(String customerEmail);
}
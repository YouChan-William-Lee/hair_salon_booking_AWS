package com.example.cloudcomputingassignment1.customer.domain.entity;

import com.example.cloudcomputingassignment1.customer.representation.CustomerRequest;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "customer")
@NoArgsConstructor
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "customer_email", unique = true)
    private String customerEmail;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "customer_name")
    private String customerName;

    @Builder(access = AccessLevel.PRIVATE)
    private Customer(Long id, String customerEmail, String phoneNumber, String customerName) {
        this.id = id;
        this.customerEmail = customerEmail;
        this.phoneNumber = phoneNumber;
        this.customerName = customerName;
    }

    public static Customer of(CustomerRequest request) {
        return Customer.builder()
                .customerEmail(request.getCustomerEmail())
                .phoneNumber(request.getPhoneNumber())
                .customerName(request.getCustomerName())
                .build();
    }
}
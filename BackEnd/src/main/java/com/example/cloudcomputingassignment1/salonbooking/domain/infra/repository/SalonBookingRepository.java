package com.example.cloudcomputingassignment1.salonbooking.domain.infra.repository;

import com.example.cloudcomputingassignment1.salonbooking.domain.entity.SalonBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface SalonBookingRepository extends JpaRepository<SalonBooking, Long> {
    List<SalonBooking> findAllByBookingDateBetween(LocalDate startDate, LocalDate endDate);
    @Query("SELECT s FROM SalonBooking s WHERE s.customerEmail = ?1")
    List<SalonBooking> getBookingsByCustomerEmail(String customerEmail);
}

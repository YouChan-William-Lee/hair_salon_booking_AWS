package com.example.cloudcomputingassignment1.salonbooking.domain.infra.repository;

import com.example.cloudcomputingassignment1.salonbooking.domain.entity.SalonBooking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface SalonBookingRepository extends JpaRepository<SalonBooking, Long> {
    List<SalonBooking> findAllByBookingDateBetween(LocalDate startDate, LocalDate endDate);
}

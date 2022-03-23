package com.example.cloudcomputingassignment1.salonbooking.domain.infra;

import com.example.cloudcomputingassignment1.salonbooking.domain.entity.SalonBooking;
import com.example.cloudcomputingassignment1.salonbooking.domain.infra.repository.SalonBookingRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SalonBookingCommandService {

    private final SalonBookingRepository repository;

    public SalonBookingCommandService(SalonBookingRepository repository) {
        this.repository = repository;
    }

    public void save(SalonBooking salonBooking) {
        repository.save(salonBooking);
    }

}

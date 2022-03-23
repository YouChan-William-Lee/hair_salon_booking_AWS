package com.example.cloudcomputingassignment1.salonbooking.app;

import com.example.cloudcomputingassignment1.salonbooking.domain.entity.SalonBooking;
import com.example.cloudcomputingassignment1.salonbooking.domain.infra.SalonBookingCommandService;
import com.example.cloudcomputingassignment1.salonbooking.representation.SalonBookingRequest;
import org.springframework.stereotype.Service;

@Service
public class SalonBookingAppService {

    private final SalonBookingCommandService salonBookingCommandService;

    public SalonBookingAppService(SalonBookingCommandService salonBookingCommandService) {
        this.salonBookingCommandService = salonBookingCommandService;
    }

    public void save(SalonBookingRequest request) {
        salonBookingCommandService.save(SalonBooking.of(request));
    }

}

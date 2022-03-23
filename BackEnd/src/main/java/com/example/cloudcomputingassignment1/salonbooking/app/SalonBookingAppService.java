package com.example.cloudcomputingassignment1.salongbooking.app;

import com.example.cloudcomputingassignment1.salonbooking.domain.entity.SalonBooking;
import com.example.cloudcomputingassignment1.salonbooking.domain.infra.SalonBookingCommandService;
import com.example.cloudcomputingassignment1.salonbooking.domain.infra.SalonBookingQueryService;
import com.example.cloudcomputingassignment1.salonbooking.representation.SalonBookingRequest;
import org.springframework.stereotype.Service;

/**
 * query서비스와 commend서비스를 이어주는 중간단계의 서비스
 */
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

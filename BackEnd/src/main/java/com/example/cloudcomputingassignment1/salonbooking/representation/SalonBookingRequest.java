package com.example.cloudcomputingassignment1.salonbooking.representation;

import com.example.cloudcomputingassignment1.salonschedule.domain.support.HairCutType;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class SalonBookingRequest {
    private Long staffId;
    private String staffName;
    private Long customerId;
    private String customerName;
    private HairCutType hairCutType;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime bookingDateTime;
}

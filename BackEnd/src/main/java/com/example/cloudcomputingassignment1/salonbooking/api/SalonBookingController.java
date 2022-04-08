package com.example.cloudcomputingassignment1.salonbooking.api;

import com.example.cloudcomputingassignment1.salonbooking.app.SalonBookingAppService;
import com.example.cloudcomputingassignment1.salonbooking.representation.SalonBookingRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/salon/booking")
public class SalonBookingController {

    private final SalonBookingAppService salonBookingAppService;

    public SalonBookingController(SalonBookingAppService salonBookingAppService) {
        this.salonBookingAppService = salonBookingAppService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody SalonBookingRequest request) {
        salonBookingAppService.save(request);
        return new ResponseEntity<>(request, HttpStatus.OK);
    }

}
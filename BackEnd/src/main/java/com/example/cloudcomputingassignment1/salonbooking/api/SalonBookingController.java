package com.example.cloudcomputingassignment1.salonbooking.api;

import com.example.cloudcomputingassignment1.salonbooking.app.SalonBookingAppService;
import com.example.cloudcomputingassignment1.salonbooking.domain.entity.SalonBooking;
import com.example.cloudcomputingassignment1.salonbooking.representation.SalonBookingRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/get/{userEmail}")
    public ResponseEntity<?> getBookingsByCustomerEmail(@PathVariable(value = "userEmail") String userEmail) {
        return new ResponseEntity<>(salonBookingAppService.getBookingsByCustomerEmail(userEmail), HttpStatus.OK);
    }

}
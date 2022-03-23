package com.example.cloudcomputingassignment1.salonschedule.api;

import com.example.cloudcomputingassignment1.salonschedule.app.SalonScheduleAppService;
import com.example.cloudcomputingassignment1.salonschedule.representation.SalonScheduleResponse;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@RestController
@RequestMapping("/salon/schedule")
public class SalonScheduleController {

    private final SalonScheduleAppService salonScheduleAppService;

    public SalonScheduleController(SalonScheduleAppService salonScheduleAppService) {
        this.salonScheduleAppService = salonScheduleAppService;
    }

    @GetMapping("")
    public ResponseEntity<List<SalonScheduleResponse>> list(
            @RequestParam(value = "date", required = false) @DateTimeFormat(pattern = "yyyy-MM-dd")
                    LocalDate date) {
        return new ResponseEntity<>(salonScheduleAppService.findAllByMonth(date), HttpStatus.OK);
    }

}

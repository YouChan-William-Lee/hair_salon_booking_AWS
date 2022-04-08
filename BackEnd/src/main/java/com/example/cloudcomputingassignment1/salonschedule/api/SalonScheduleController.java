package com.example.cloudcomputingassignment1.salonschedule.api;

import com.example.cloudcomputingassignment1.salonschedule.app.SalonScheduleAppService;
import com.example.cloudcomputingassignment1.salonschedule.domain.entity.SalonSchedule;
import com.example.cloudcomputingassignment1.salonschedule.representation.SalonScheduleResponse;
import com.example.cloudcomputingassignment1.salonschedule.representation.SalonScheduleRequest;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
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

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody SalonScheduleRequest request) {
        List<SalonSchedule> salonSchedule = salonScheduleAppService.findSalonScheduleByStaffEmail(request.getStaffEmail());
        if (salonSchedule.size() == 0) {
            Long newStaffId = salonScheduleAppService.findLastStaffId() + 1;
            request.setStaffId(newStaffId);
            salonScheduleAppService.save(request);
        }
        return new ResponseEntity<>(request, HttpStatus.OK);
    }
}

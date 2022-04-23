package com.example.cloudcomputingassignment1.staff.api;

import com.example.cloudcomputingassignment1.salonschedule.app.SalonScheduleAppService;
import com.example.cloudcomputingassignment1.salonschedule.domain.entity.SalonSchedule;
import com.example.cloudcomputingassignment1.salonschedule.representation.SalonScheduleRequest;
import com.example.cloudcomputingassignment1.staff.app.StaffAppService;
import com.example.cloudcomputingassignment1.staff.domain.entity.Staff;
import com.example.cloudcomputingassignment1.staff.domain.support.StaffRole;
import com.example.cloudcomputingassignment1.staff.representation.StaffRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/staff")
public class StaffController {

    private final StaffAppService staffAppService;
    private final SalonScheduleAppService salonScheduleAppService;

    public StaffController(StaffAppService staffAppService, SalonScheduleAppService salonScheduleAppService) {
        this.staffAppService = staffAppService;
        this.salonScheduleAppService = salonScheduleAppService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody SalonScheduleRequest salonScheduleRequest) {
        Staff staff = staffAppService.findStaffByStaffEmail(salonScheduleRequest.getStaffEmail());
        // Add staff info in DB first
        if (staff == null) {
            Long staffId = staffAppService.findLastStaffId() + 1;
            StaffRequest newRequest = new StaffRequest();
            newRequest.setStaffId(staffId);
            newRequest.setStaffEmail(salonScheduleRequest.getStaffEmail());
            newRequest.setStaffName(salonScheduleRequest.getStaffName());
            newRequest.setPhoneNumber(salonScheduleRequest.getStaffPhoneNumber());
            newRequest.setStaffRole(StaffRole.STAFF);
            staffAppService.save(newRequest);
        }
        // Add staff schedule info in DB next
        List<SalonSchedule> salonSchedule = salonScheduleAppService.findSalonScheduleByStaffEmail(salonScheduleRequest.getStaffEmail());
        if (salonSchedule.size() == 0) {
            Long newStaffId = salonScheduleAppService.findLastStaffId() + 1;
            salonScheduleRequest.setStaffId(newStaffId);
            salonScheduleAppService.save(salonScheduleRequest);
        }
        return new ResponseEntity<>(salonScheduleRequest, HttpStatus.OK);
    }

    @GetMapping("/allstaff")
    public ResponseEntity<?> getAllStaff() {
        return new ResponseEntity<>(staffAppService.getAllStaff(), HttpStatus.OK);
    }
}

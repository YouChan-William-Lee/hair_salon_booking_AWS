package com.example.cloudcomputingassignment1.staff.app;

import com.example.cloudcomputingassignment1.staff.domain.entity.Staff;
import com.example.cloudcomputingassignment1.staff.domain.infra.StaffCommandService;
import com.example.cloudcomputingassignment1.staff.domain.support.StaffRole;
import com.example.cloudcomputingassignment1.staff.representation.StaffRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffAppService {

    private final StaffCommandService staffCommandService;

    public StaffAppService(StaffCommandService staffCommandService) {
        this.staffCommandService = staffCommandService;
    }

    public void save(StaffRequest request) {
        staffCommandService.save(Staff.of(request));
    }

    public Staff findStaffByStaffEmail(String staffEmail) {
        return staffCommandService.findStaffByStaffEmail(staffEmail);
    }

    public List<Staff> getAllStaff() {
        return staffCommandService.getAllStaff();
    }

    public Long findLastStaffId() {
        return staffCommandService.findLastStaffId();
    }
}

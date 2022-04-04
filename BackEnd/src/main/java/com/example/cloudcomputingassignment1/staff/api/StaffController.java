package com.example.cloudcomputingassignment1.staff.api;

import com.example.cloudcomputingassignment1.staff.app.StaffAppService;
import com.example.cloudcomputingassignment1.staff.domain.entity.Staff;
import com.example.cloudcomputingassignment1.staff.domain.support.StaffRole;
import com.example.cloudcomputingassignment1.staff.representation.StaffRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/staff")
public class StaffController {

    private final StaffAppService staffAppService;

    public StaffController(StaffAppService staffAppService) {
        this.staffAppService = staffAppService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody StaffRequest request) {
        Staff staff = staffAppService.findStaffByStaffEmail(request.getStaffEmail());
        if (staff == null)
            staffAppService.save(request);
        return new ResponseEntity<>(request, HttpStatus.OK);
    }

    @GetMapping("/check/{staffemail}")
    public ResponseEntity<?> checkAdmin(@PathVariable(value = "staffemail") String staffemail) {
        Staff staff = staffAppService.checkAdmin(staffemail, StaffRole.ADMIN);

        if (staff == null)
            return new ResponseEntity<>(false, HttpStatus.OK);
        else
            return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @GetMapping("/allstaff")
    public ResponseEntity<?> getAllStaff() {
        return new ResponseEntity<>(staffAppService.getAllStaff(), HttpStatus.OK);
    }
}

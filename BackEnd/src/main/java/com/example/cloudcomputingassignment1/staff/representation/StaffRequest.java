package com.example.cloudcomputingassignment1.staff.representation;

import com.example.cloudcomputingassignment1.staff.domain.support.StaffRole;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StaffRequest {
    private Long staffId;
    private String staffEmail;
    private String phoneNumber;
    private String staffName;
    private StaffRole staffRole;
}

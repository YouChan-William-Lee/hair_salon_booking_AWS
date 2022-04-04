package com.example.cloudcomputingassignment1.staff.domain.entity;

import com.example.cloudcomputingassignment1.staff.domain.support.StaffRole;
import com.example.cloudcomputingassignment1.staff.representation.StaffRequest;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "staff")
@NoArgsConstructor
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "staff_email", unique = true)
    private String staffEmail;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "staff_name")
    private String staffName;

    @Column(name = "staff_role")
    @Enumerated(EnumType.STRING)
    private StaffRole staffRole;

    @Builder(access = AccessLevel.PRIVATE)
    private Staff(Long id, String staffEmail, String phoneNumber, String staffName, StaffRole staffRole) {
        this.id = id;
        this.staffEmail = staffEmail;
        this.phoneNumber = phoneNumber;
        this.staffName = staffName;
        this.staffRole = staffRole;
    }

    public static Staff of(StaffRequest request) {
        return Staff.builder()
                .staffEmail(request.getStaffEmail())
                .phoneNumber(request.getPhoneNumber())
                .staffName(request.getStaffName())
                .staffRole(request.getStaffRole())
                .build();
    }
}
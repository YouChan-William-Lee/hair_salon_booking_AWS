package com.example.cloudcomputingassignment1.staff.domain.infra.repository;

import com.example.cloudcomputingassignment1.staff.domain.entity.Staff;
import com.example.cloudcomputingassignment1.staff.domain.support.StaffRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StaffRepository extends JpaRepository<Staff, Long> {
    @Query("SELECT s FROM Staff s WHERE s.staffEmail = ?1")
    Staff findStaffByStaffEmail(String staffEmail);

    @Query("SELECT s.staffId FROM Staff s WHERE s.id=(SELECT MAX(s.id) FROM Staff s)")
    Long findLastStaffId();
}

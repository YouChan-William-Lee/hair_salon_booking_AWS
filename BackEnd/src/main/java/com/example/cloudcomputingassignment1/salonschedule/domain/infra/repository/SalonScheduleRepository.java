package com.example.cloudcomputingassignment1.salonschedule.domain.infra.repository;

import com.example.cloudcomputingassignment1.salonschedule.domain.entity.SalonSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SalonScheduleRepository extends JpaRepository<SalonSchedule, Long> {
    @Query("SELECT s FROM SalonSchedule s WHERE s.isHoliday = false")
    List<SalonSchedule> findAllByHolidayIsFalse();

    @Query("SELECT s FROM SalonSchedule s WHERE s.staffEmail = ?1")
    List<SalonSchedule> findSalonScheduleByStaffEmail(String staffEmail);

    @Query("SELECT s.staffId FROM SalonSchedule s WHERE s.id=(SELECT MAX(s.id) FROM SalonSchedule s)")
    Long findLastStaffId();
}

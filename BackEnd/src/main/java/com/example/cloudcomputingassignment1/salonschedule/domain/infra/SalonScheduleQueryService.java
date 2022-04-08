package com.example.cloudcomputingassignment1.salonschedule.domain.infra;

import com.example.cloudcomputingassignment1.salonschedule.domain.entity.SalonSchedule;
import com.example.cloudcomputingassignment1.salonschedule.domain.infra.repository.SalonScheduleRepository;
import com.example.cloudcomputingassignment1.salonschedule.representation.SalonScheduleRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.time.DayOfWeek;

@Service
@Transactional
public class SalonScheduleQueryService {

    private final SalonScheduleRepository repository;

    public SalonScheduleQueryService(SalonScheduleRepository repository) {
        this.repository = repository;
    }

    public List<SalonSchedule> findAllByHolidayIsFalse() {
        return repository.findAllByHolidayIsFalse();
    }

    public List<SalonSchedule> findSalonScheduleByStaffEmail(String staffEmail) {
        return repository.findSalonScheduleByStaffEmail(staffEmail);
    }

    public void save(SalonScheduleRequest request) {
        // Monday, Wednesday, Friday
        if (request.getHairCutType().equals(1L)) {
            request.setDayOfWeek(DayOfWeek.MONDAY);
            request.setIsHoliday(false);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.TUESDAY);
            request.setIsHoliday(true);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.WEDNESDAY);
            request.setIsHoliday(false);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.THURSDAY);
            request.setIsHoliday(true);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.FRIDAY);
            request.setIsHoliday(false);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.SATURDAY);
            request.setIsHoliday(true);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.SUNDAY);
            request.setIsHoliday(true);
            repository.save(SalonSchedule.of(request));
        // Tuesday, Thursday, Saturday
        } else if (request.getHairCutType().equals(2L)) {
            request.setDayOfWeek(DayOfWeek.MONDAY);
            request.setIsHoliday(true);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.TUESDAY);
            request.setIsHoliday(false);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.WEDNESDAY);
            request.setIsHoliday(true);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.THURSDAY);
            request.setIsHoliday(false);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.FRIDAY);
            request.setIsHoliday(true);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.SATURDAY);
            request.setIsHoliday(false);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.SUNDAY);
            request.setIsHoliday(true);
            repository.save(SalonSchedule.of(request));
        // Friday, Saturday, Sunday
        } else if (request.getHairCutType().equals(3L)) {
            request.setDayOfWeek(DayOfWeek.MONDAY);
            request.setIsHoliday(true);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.TUESDAY);
            request.setIsHoliday(true);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.WEDNESDAY);
            request.setIsHoliday(true);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.THURSDAY);
            request.setIsHoliday(true);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.FRIDAY);
            request.setIsHoliday(false);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.SATURDAY);
            request.setIsHoliday(false);
            repository.save(SalonSchedule.of(request));
            request.setDayOfWeek(DayOfWeek.SUNDAY);
            request.setIsHoliday(false);
            repository.save(SalonSchedule.of(request));
        }
    }

    public Long findLastStaffId() {
        return repository.findLastStaffId();
    }
}

package com.example.cloudcomputingassignment1.salonschedule.app;

import com.example.cloudcomputingassignment1.salonbooking.domain.entity.SalonBooking;
import com.example.cloudcomputingassignment1.salonbooking.domain.infra.SalonBookingQueryService;
import com.example.cloudcomputingassignment1.salonbooking.domain.support.BookingDateSearch;
import com.example.cloudcomputingassignment1.salonschedule.domain.entity.SalonSchedule;
import com.example.cloudcomputingassignment1.salonschedule.domain.infra.SalonScheduleQueryService;
import com.example.cloudcomputingassignment1.salonschedule.representation.SalonScheduleRequest;
import com.example.cloudcomputingassignment1.salonschedule.representation.SalonScheduleResponse;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class SalonScheduleAppService {

    private final SalonScheduleQueryService salonScheduleQueryService;
    private final SalonBookingQueryService salonBookingQueryService;

    public SalonScheduleAppService(SalonScheduleQueryService salonScheduleQueryService, SalonBookingQueryService salonBookingQueryService) {
        this.salonScheduleQueryService = salonScheduleQueryService;
        this.salonBookingQueryService = salonBookingQueryService;
    }

    public List<SalonScheduleResponse> findAllByMonth(LocalDate date) {
        Map<Long, List<SalonSchedule>> scheduleMap = getScheduleMapByStaffId();
        Map<Long, List<SalonBooking>> bookingMap = getBookingMapByStaffId(date);
        return SalonScheduleResponse.of(scheduleMap, bookingMap);
    }

    private Map<Long, List<SalonSchedule>> getScheduleMapByStaffId() {
        return salonScheduleQueryService.findAllByHolidayIsFalse().stream()
                .collect(Collectors.groupingBy(SalonSchedule::getStaffId));
    }

    private Map<Long, List<SalonBooking>> getBookingMapByStaffId(LocalDate date) {
        return salonBookingQueryService.findAllByDate(BookingDateSearch.from(date)).stream()
                .collect(Collectors.groupingBy(SalonBooking::getStaffId));
    }

    public List<SalonSchedule> findSalonScheduleByStaffEmail(String staffEmail) {
        return salonScheduleQueryService.findSalonScheduleByStaffEmail(staffEmail);
    }

    public void save(SalonScheduleRequest request) {
        salonScheduleQueryService.save(request);
    }

    public Long findLastStaffId() {
        return salonScheduleQueryService.findLastStaffId();
    }
}

package com.example.cloudcomputingassignment1.salonschedule.representation;

import static java.util.stream.Collectors.toList;

import com.example.cloudcomputingassignment1.salonbooking.domain.entity.SalonBooking;
import com.example.cloudcomputingassignment1.salonschedule.domain.entity.SalonSchedule;
import com.example.cloudcomputingassignment1.salonschedule.domain.support.HairCutType;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Getter
public class SalonScheduleResponse {

    private Long staffId;
    private String staffName;
    private String staffEmail;
    private Long scheduleType;
    private List<HairCutType> hairCutTypes;
    private List<WorkingPeriod> workingPeriods;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private List<LocalDateTime> bookingDateTimes;

    @Builder(access = AccessLevel.PRIVATE)
    private SalonScheduleResponse(Long staffId, String staffName, String staffEmail, Long scheduleType, List<HairCutType> hairCutTypes,
                                  List<WorkingPeriod> workingPeriods, List<LocalDateTime> bookingDateTimes) {
        this.staffId = staffId;
        this.staffName = staffName;
        this.staffEmail = staffEmail;
        this.scheduleType = scheduleType;
        this.hairCutTypes = hairCutTypes;
        this.workingPeriods = workingPeriods;
        this.bookingDateTimes = bookingDateTimes;
    }

    public static List<SalonScheduleResponse> of(Map<Long, List<SalonSchedule>> scheduleMap,
                                                 Map<Long, List<SalonBooking>> bookingMap) {

        return scheduleMap.entrySet().stream()
                .map(entry -> {
                    String staffName = "";
                    String staffEmail = "";
                    Long scheduleType = 0L;
                    if (entry.getValue().size() != 0) {
                        staffName = entry.getValue().get(0).getStaffName();
                        staffEmail = entry.getValue().get(0).getStaffEmail();
                        scheduleType = entry.getValue().get(0).getScheduleType();
                        System.out.println(scheduleType);
                    }
                    return SalonScheduleResponse.builder()
                            .staffId(entry.getKey())
                            .staffName(staffName)
                            .staffEmail(staffEmail)
                            .scheduleType(scheduleType)
                            .hairCutTypes(filterHairCutTypes(scheduleType))
                            .workingPeriods(WorkingPeriod.of(entry.getValue()))
                            .bookingDateTimes(filterBookingDateTime(bookingMap, entry.getKey()))
                            .build();
                })
                .collect(toList());
    }

    private static List<LocalDateTime> filterBookingDateTime(Map<Long, List<SalonBooking>> bookingMap, Long staffId) {
        if (Objects.isNull(bookingMap.get(staffId))) {
            return Collections.EMPTY_LIST;
        }
        return bookingMap.get(staffId).stream().map(SalonBooking::getBookingDateTime).collect(toList());
    }

    @Getter
    private static class WorkingPeriod {

        private static final List<Integer> DEFAULT_TIME = Collections.unmodifiableList(Arrays.asList(10, 11, 12, 13, 14, 15, 16, 17, 18));

        private DayOfWeek workingWeek;
        private List<LocalTime> workingTimes;

        @Builder(access = AccessLevel.PRIVATE)
        private WorkingPeriod(DayOfWeek workingWeek, List<LocalTime> workingTimes) {
            this.workingWeek = workingWeek;
            this.workingTimes = workingTimes;
        }

        public static List<WorkingPeriod> of(List<SalonSchedule> schedules) {
            return schedules.stream()
                    .map(schedule -> WorkingPeriod.builder()
                            .workingWeek(schedule.getDayOfTheWeek())
                            .workingTimes(makeTime())
                            .build()
                    )
                    .collect(toList());
        }

        private static List<LocalTime> makeTime() {
            return DEFAULT_TIME.stream()
                    .map(e -> LocalTime.of(e, 0))
                    .collect(toList());
        }

    }

    private static List<HairCutType> filterHairCutTypes(Long scheduleType) {
        // If schedule Type is Mens hair and Treatment
        if (scheduleType.equals(1L)) {
            return Collections.unmodifiableList(Arrays.asList(HairCutType.MENS_HAIR_CUT,
                    HairCutType.MENS_PERM, HairCutType.TREATMENT));
        // If schedule Type is Womens hair and Treatment
        } else if (scheduleType.equals(2L)) {
            return Collections.unmodifiableList(Arrays.asList(HairCutType.WOMENS_HAIR_CUT,
                    HairCutType.WOMENS_PERM, HairCutType.TREATMENT));
        // If schedule Type is both Mens and Womens hair and Treatment
        } else if (scheduleType.equals(3L)) {
            return Collections.unmodifiableList(Arrays.asList(HairCutType.MENS_HAIR_CUT,
                    HairCutType.WOMENS_HAIR_CUT, HairCutType.WOMENS_PERM, HairCutType.MENS_PERM,
                    HairCutType.TREATMENT));
        }
        return Collections.EMPTY_LIST;
    }

}

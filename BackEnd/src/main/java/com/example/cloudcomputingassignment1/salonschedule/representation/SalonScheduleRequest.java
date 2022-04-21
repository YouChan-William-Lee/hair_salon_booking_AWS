package com.example.cloudcomputingassignment1.salonschedule.representation;

import lombok.Getter;
import lombok.Setter;

import java.time.DayOfWeek;
import java.time.LocalDateTime;

@Getter
@Setter
public class SalonScheduleRequest {
    private Long staffId;
    private String staffName;
    private String staffPhoneNumber;
    private String staffEmail;
    private Long hairCutType;
    private Long scheduleType;
    private DayOfWeek dayOfWeek;
    private Boolean isHoliday;
    private LocalDateTime createdDate;
    private LocalDateTime lastModifiedDate;
}

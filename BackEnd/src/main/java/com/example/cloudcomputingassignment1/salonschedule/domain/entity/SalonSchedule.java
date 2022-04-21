package com.example.cloudcomputingassignment1.salonschedule.domain.entity;

import com.example.cloudcomputingassignment1.salonschedule.representation.SalonScheduleRequest;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.DayOfWeek;
import java.time.LocalDateTime;

@Getter
@Entity
@Table(name = "salon_schedule")
@NoArgsConstructor
public class SalonSchedule  {

    private static final long serialVersionUID = 60255784L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "staff_id")
    private Long staffId;

    @Column(name = "staff_name")
    private String staffName;

    @Column(name = "staff_phone_number")
    private String staffPhoneNumber;

    @Column(name = "staff_email")
    private String staffEmail;

    @Column(name = "hair_cut_type")
    private Long hairCutType;

    @Column(name = "schedule_type")
    private Long scheduleType;

    @Enumerated(EnumType.STRING)
    private DayOfWeek dayOfTheWeek;

    @Column(name = "is_holiday")
    private boolean isHoliday;

    @CreationTimestamp
    private LocalDateTime createdDate;

    @UpdateTimestamp
    private LocalDateTime lastModifiedDate;

    @Builder(access = AccessLevel.PRIVATE)
    public SalonSchedule(Long id, Long staffId, String staffName, String staffPhoneNumber, String staffEmail, Long hairCutType, Long scheduleType, DayOfWeek dayOfTheWeek, boolean isHoliday, LocalDateTime createdDate, LocalDateTime lastModifiedDate) {
        this.id = id;
        this.staffId = staffId;
        this.staffName = staffName;
        this.staffPhoneNumber = staffPhoneNumber;
        this.staffEmail = staffEmail;
        this.hairCutType = hairCutType;
        this.scheduleType = scheduleType;
        this.dayOfTheWeek = dayOfTheWeek;
        this.isHoliday = isHoliday;
        this.createdDate = createdDate;
        this.lastModifiedDate = lastModifiedDate;
    }

    public static SalonSchedule of(SalonScheduleRequest request) {
        return SalonSchedule.builder()
                .staffId(request.getStaffId())
                .staffName(request.getStaffName())
                .staffPhoneNumber(request.getStaffPhoneNumber())
                .staffEmail(request.getStaffEmail())
                .hairCutType(request.getHairCutType())
                .scheduleType(request.getScheduleType())
                .dayOfTheWeek(request.getDayOfWeek())
                .isHoliday(request.getIsHoliday())
                .createdDate(request.getCreatedDate())
                .lastModifiedDate(request.getLastModifiedDate())
                .build();
    }
}

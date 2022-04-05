package com.example.cloudcomputingassignment1.salonschedule.domain.entity;

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

    @Column(name = "staff_email")
    private String staffEmail;

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
}

package com.example.cloudcomputingassignment1.salonbooking.domain.entity;

import com.example.cloudcomputingassignment1.salonbooking.representation.SalonBookingRequest;
import com.example.cloudcomputingassignment1.salonschedule.domain.support.HairCutType;
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
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Getter
@Entity
@Table(name = "salon_booking")
@NoArgsConstructor
public class SalonBooking {

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

    @Column(name = "customer_name")
    private String customerName;

    @Column(name = "customer_email")
    private String customerEmail;

    @Enumerated(EnumType.STRING)
    @Column(name = "hair_cut_type")
    private HairCutType hairCutType;

    @Column(name = "booking_date_time")
    private LocalDateTime bookingDateTime;

    @Column(name = "booking_date")
    private LocalDate bookingDate;

    @Column(name = "booking_time")
    private LocalTime bookingTime;

    @CreationTimestamp
    private LocalDateTime createdDate;

    @UpdateTimestamp
    private LocalDateTime lastModifiedDate;

    @Builder(access = AccessLevel.PRIVATE)
    private SalonBooking(Long staffId, HairCutType hairCutType, String staffName, String staffEmail,
                         String customerName, String customerEmail, LocalDateTime bookingDateTime,
                         LocalDate bookingDate, LocalTime bookingTime) {
        this.staffId = staffId;
        this.staffName = staffName;
        this.staffEmail = staffEmail;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.hairCutType = hairCutType;
        this.bookingDateTime = bookingDateTime;
        this.bookingDate = bookingDate;
        this.bookingTime = bookingTime;
    }

    public static SalonBooking of(SalonBookingRequest request) {
        return SalonBooking.builder()
                .staffId(request.getStaffId())
                .staffName(request.getStaffName())
                .staffEmail(request.getStaffEmail())
                .customerName(request.getCustomerName())
                .customerEmail(request.getCustomerEmail())
                .hairCutType(request.getHairCutType())
                .bookingDateTime(request.getBookingDateTime())
                .bookingDate(request.getBookingDateTime().toLocalDate())
                .bookingTime(request.getBookingDateTime().toLocalTime())
                .build();
    }

}

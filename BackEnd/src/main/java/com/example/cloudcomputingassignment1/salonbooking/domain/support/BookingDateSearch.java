package com.example.cloudcomputingassignment1.salonbooking.domain.support;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;
import java.util.Objects;

@Getter
public class BookingDateSearch {
    private LocalDate startDate;
    private LocalDate endDate;

    @Builder(access = AccessLevel.PRIVATE)
    private BookingDateSearch(LocalDate startDate, LocalDate endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public static BookingDateSearch from(LocalDate date) {
        date = Objects.isNull(date) ? LocalDate.now() : date;
        return BookingDateSearch.builder()
                .startDate(date.withDayOfMonth(1))
                .endDate(date.withDayOfMonth(date.lengthOfMonth()))
                .build();
    }

}

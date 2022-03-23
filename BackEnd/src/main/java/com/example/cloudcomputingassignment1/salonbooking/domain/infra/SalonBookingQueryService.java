package com.example.cloudcomputingassignment1.salonbooking.domain.infra;

import com.example.cloudcomputingassignment1.salonbooking.domain.entity.SalonBooking;
import com.example.cloudcomputingassignment1.salonbooking.domain.infra.repository.SalonBookingRepository;
import com.example.cloudcomputingassignment1.salonbooking.domain.support.BookingDateSearch;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class SalonBookingQueryService {

    private final SalonBookingRepository repository;

    public SalonBookingQueryService(SalonBookingRepository repository) {
        this.repository = repository;
    }

    public List<SalonBooking> findAllByDate(BookingDateSearch search) {
        return repository.findAllByBookingDateBetween(search.getStartDate(), search.getEndDate());
    }

}

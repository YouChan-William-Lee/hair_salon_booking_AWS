package com.example.cloudcomputingassignment1.salonbooking.domain.infra;

import com.example.cloudcomputingassignment1.salongbooking.domain.entity.SalonBooking;
import com.example.cloudcomputingassignment1.salongbooking.domain.infra.repository.SalonBookingRepository;
import com.example.cloudcomputingassignment1.salongbooking.domain.support.BookingDateSearch;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * CQRS의 패턴에서의 입력/수정/삭제 하는 서비스
 * CQRS은 인터넷으로 공부해보시면 됩니다.
 * 해당 서비스는 조회는 없습니다.
 * */
@Service
@Transactional
public class SalonBookingCommandService {

    private final SalongBookingRepository repository;

    public SalonBookingCommandService(SalongBookingRepository repository) {
        this.repository = repository;
    }

    public void save(SalonBooking salonBooking) {
        repository.save(salonBooking);
    }

}

package com.example.cloudcomputingassignment1.salonschedule.domain.infra;

import com.example.cloudcomputingassignment1.salonschedule.domain.entity.SalonSchedule;
import com.example.cloudcomputingassignment1.salonschedule.domain.infra.repository.SalonScheduleRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class SalonScheduleQueryService {

    private final SalonScheduleRepository repository;

    public SalonScheduleQueryService(SalonScheduleRepository repository) {
        this.repository = repository;
    }

    public List<SalonSchedule> findAllByHolidayIsFalse() {
        return repository.findAllByHolidayIsFalse();
    }

}

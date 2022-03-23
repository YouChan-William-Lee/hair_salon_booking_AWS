package com.example.cloudcomputingassignment1.salonschedule.domain.infra;

import com.example.cloudcomputingassignment1.salonschedule.domain.entity.SalonSchedule;
import com.example.cloudcomputingassignment1.salonschedule.domain.infra.repository.SalonScheduleRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * CQRS의 패턴에서의 조회만 하는 서비스
 * CQRS은 인터넷으로 공부해보시면 됩니다.
 * 해당 서비스는 입력값은 없고 조회만 합니다.
 * 조회만 하므로 readOnly = true로 설정합니다 속도가 훨씬 빠릅니다.
 * */
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

package com.example.cloudcomputingassignment1.staff.domain.infra;

import com.example.cloudcomputingassignment1.staff.domain.entity.Staff;
import com.example.cloudcomputingassignment1.staff.domain.infra.repository.StaffRepository;
import com.example.cloudcomputingassignment1.staff.domain.support.StaffRole;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class StaffCommandService {
    private final StaffRepository repository;

    public StaffCommandService(StaffRepository repository) {
        this.repository = repository;
    }

    public void save(Staff staff) {
        repository.save(staff);
    }

    public Staff findStaffByStaffEmail(String staffEmail) {
        return repository.findStaffByStaffEmail(staffEmail);
    }

    public List<Staff> getAllStaff() {
        List<Staff> staff = new ArrayList<Staff>();
        repository.findAll().forEach(staff::add);
        return staff;
    }

    public Long findLastStaffId() {
        return repository.findLastStaffId();
    }
}

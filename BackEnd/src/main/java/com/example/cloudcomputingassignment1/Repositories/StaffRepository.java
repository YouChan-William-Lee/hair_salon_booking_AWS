package com.example.cloudcomputingassignment1.Repositories;

import com.example.cloudcomputingassignment1.model.Staff;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StaffRepository extends CrudRepository<Staff, Long> {
    Staff findByStaffname(String staffname);
}

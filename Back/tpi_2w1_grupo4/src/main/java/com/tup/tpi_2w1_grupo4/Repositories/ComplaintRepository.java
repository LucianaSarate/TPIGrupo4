package com.tup.tpi_2w1_grupo4.Repositories;

import com.tup.tpi_2w1_grupo4.EntitiesComplaints.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComplaintRepository extends JpaRepository<Complaint, Long> {
}

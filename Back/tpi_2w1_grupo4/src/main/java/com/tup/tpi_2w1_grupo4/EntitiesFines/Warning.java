package com.tup.tpi_2w1_grupo4.EntitiesFines;

import com.tup.tpi_2w1_grupo4.EntitiesComplaints.Report;
import lombok.Data;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "WARNINGS")
public class Warning {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "report_id", nullable = false)
    private Report report;

    @Column(name = "created_date", nullable = false)
    private LocalDateTime createdDate;

    @Column(name = "created_user", nullable = false)
    private Integer createdUser;

    @Column(name = "last_updated_date", nullable = false)
    private LocalDateTime lastUpdatedDate;

    @Column(name = "last_updated_user", nullable = false)
    private Integer lastUpdatedUser;
}


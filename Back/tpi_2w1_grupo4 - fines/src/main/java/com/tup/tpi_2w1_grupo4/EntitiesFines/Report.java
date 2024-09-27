package com.tup.tpi_2w1_grupo4.EntitiesFines;

import com.tup.tpi_2w1_grupo4.EntitiesFines.ReportReason;
import lombok.Data;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "REPORTS")
public class Report {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "report_state", nullable = false)
    private String reportState;

    @ManyToOne
    @JoinColumn(name = "report_reason_id", nullable = false)
    private ReportReason reportReason;

    @Column(name = "plot_id", nullable = false)
    private Integer plotId;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "state_reason", nullable = false)
    private String stateReason;

    @Column(name = "created_date", nullable = false)
    private LocalDateTime createdDate;

    @Column(name = "created_user", nullable = false)
    private Integer createdUser;

    @Column(name = "last_updated_date", nullable = false)
    private LocalDateTime lastUpdatedDate;

    @Column(name = "last_updated_user", nullable = false)
    private Integer lastUpdatedUser;
}


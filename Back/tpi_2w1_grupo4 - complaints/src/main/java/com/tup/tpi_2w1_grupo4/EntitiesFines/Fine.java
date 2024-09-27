package com.tup.tpi_2w1_grupo4.EntitiesFines;

import lombok.Data;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "FINES")
public class Fine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fine_state", nullable = false)
    private String fineState;

    @ManyToOne
    @JoinColumn(name = "report_id", nullable = false)
    private Report report;

    @Column(name = "discharge_date")
    private LocalDateTime dischargeDate;

    @Column(name = "amount", nullable = false)
    private Double amount;

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

package com.tup.tpi_2w1_grupo4.EntitiesFines;

import lombok.Data;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "DISCLAIMERS")
public class Disclaimer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "fine_id", nullable = false)
    private Fine fine;

    @Column(name = "disclaimer", nullable = false)
    private String disclaimer;

    @Column(name = "created_date", nullable = false)
    private LocalDateTime createdDate;

    @Column(name = "created_user", nullable = false)
    private Integer createdUser;

    @Column(name = "last_updated_date", nullable = false)
    private LocalDateTime lastUpdatedDate;

    @Column(name = "last_updated_user", nullable = false)
    private Integer lastUpdatedUser;
}


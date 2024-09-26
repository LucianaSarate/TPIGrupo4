package com.tup.tpi_2w1_grupo4.Dtos;

import com.tup.tpi_2w1_grupo4.EntitiesComplaints.ReportReason;
import lombok.Data;

@Data
public class WarningDto {
    private Long id;
    private String reportReason;
    private String nameAcussed;
    private String description;
}

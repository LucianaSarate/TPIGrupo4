package com.tup.tpi_2w1_grupo4.Dtos;

import lombok.Data;

@Data
public class WarningDto {
    private Long id;
    private String reportReason;
    private String nameAcussed;
    private String description;
}

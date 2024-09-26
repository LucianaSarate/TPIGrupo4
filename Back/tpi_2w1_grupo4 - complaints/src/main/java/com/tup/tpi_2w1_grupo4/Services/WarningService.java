package com.tup.tpi_2w1_grupo4.Services;

import com.tup.tpi_2w1_grupo4.Dtos.WarningDto;
import com.tup.tpi_2w1_grupo4.EntitiesFines.Warning;
import org.springframework.stereotype.Service;

import java.util.List;

public interface WarningService {
    List<WarningDto> getAll();
}

package com.tup.tpi_2w1_grupo4.Controllers;

import com.tup.tpi_2w1_grupo4.Dtos.WarningDto;
import com.tup.tpi_2w1_grupo4.EntitiesFines.Warning;
import com.tup.tpi_2w1_grupo4.Services.WarningService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping()
public class MicroserviceFinesController {
    private final WarningService warningService;

    public MicroserviceFinesController (WarningService warningServices){
        warningService = warningServices;
    }

    @GetMapping("/warnings")
    public List<WarningDto> getWarnings(){
        return warningService.getAll();
    }

}

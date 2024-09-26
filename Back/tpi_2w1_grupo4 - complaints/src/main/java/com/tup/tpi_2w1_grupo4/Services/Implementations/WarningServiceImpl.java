package com.tup.tpi_2w1_grupo4.Services.Implementations;

import com.tup.tpi_2w1_grupo4.Dtos.WarningDto;
import com.tup.tpi_2w1_grupo4.EntitiesFines.Warning;
import com.tup.tpi_2w1_grupo4.Repositories.WarningRepository;
import com.tup.tpi_2w1_grupo4.Services.WarningService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WarningServiceImpl implements WarningService {

    private final WarningRepository repository;
    private final ModelMapper mapper;

    public WarningServiceImpl(WarningRepository warningRepository, ModelMapper modelMapper){
        repository = warningRepository;
        mapper = modelMapper;
    }

    public List<WarningDto> getAll(){
        List<Warning> warnings = repository.findAll();
        List<WarningDto> warningDtos = null;

        for(Warning warning : warnings){
            WarningDto warningDto = mapper.map(warning, WarningDto.class);
            warningDtos.add(warningDto);
        }
    return warningDtos;
    }
}

export interface Denuncia {
    id: number;
    nombre: string
    detalle: string
    tipo: TipoDenuncia;
    estado: EstadoDenuncia;
}
//(aprobada, ignorada, rechazada, pendiente)
//(incimplimiento daño  infrwaccion de volumen, no manteni miento de limpieza)

export enum EstadoDenuncia {
    Aprobada = 'aprobada',
    Ignorada = 'ignorada',
    Rechazada = 'rechazada',
    Pendiente = 'pendiente'
}

export enum TipoDenuncia {
    IncumplimientoDeVelocidad = 'incumplimiento de velocidad',
    Daño = 'daño',
    InfracciónDeinquilino = 'infracción contra el inquilino',
    NoMantenimientoDeLimpieza = 'no mantenimiento de limpieza'
}
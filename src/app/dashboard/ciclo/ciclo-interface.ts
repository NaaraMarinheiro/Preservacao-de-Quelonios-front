export interface Ciclo {
    idCiclo?: number;
    nomeCiclo: string;
    uf: string;
    municipio:{idMunicipio:string};
    comunidade:{idComunidade:string};
    
}
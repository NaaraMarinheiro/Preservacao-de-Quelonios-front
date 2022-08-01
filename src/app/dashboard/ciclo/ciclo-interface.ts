export interface Ciclo {
    idCiclo?: number;
    nomeCiclo: string;
    uf: string;
    municipio: {
        idMunicipio: string;
        nomeMunicipio?: string;
    };
    comunidade: {
        idComunidade: string;
        nomeComunidade?: string;
    };
}
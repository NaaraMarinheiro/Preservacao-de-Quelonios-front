export interface Viagem {
    idViagem: string;
    dataViagem: string;
    coordenador: {
        idCoordenador: string;
    }

    ciclo: {
        idCiclo: string;
        nomeCiclo: string;
        municipio: {
            idMunicipio: string;
            nomeMunicipio?: string;
        };
        comunidade: {
            idComunidade: string;
            nomeComunidade?: string;
        };
    }
}
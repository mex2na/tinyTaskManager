
export type NewPoeteDto = {
    nomPoete: string,
    prenomPoete: string,
    pseudo: string,
    telPoete: string,
    dateNaissance: string,
    idCollectif: number
}

export type UpdatePoeteDto = {
    idPoete: number | string,
    nomPoete: string,
    prenomPoete: string,
    pseudo: string,
    telPoete: string,
    dateNaissance: string
}
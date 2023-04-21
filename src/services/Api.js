import berakningsunderlag_data from './berakningsunderlag_data.json';


let teams_data = [
    {
        "id": "1",
        "namn": "Test",
        "medlemmar": [],
        "value": "Test",
        "label": "Test"
    },
    {
        "id": "2",
        "namn": "Test2",
        "medlemmar": [],
        "value": "Test2",
        "label": "Test2"
    },
    {
        "id": "3",
        "namn": "Test3",
        "medlemmar": [],
        "value": "Test3",
        "label": "Test3"
    }
]

let anlaggningar_data = [
    {
        "id": 1,
        "namn": "Test",
        "teamID": "1",
        "team": "Test",
        "godkannandeNummer": "396",
        "företag": "Test",
        "godkannandeDatum": "2013-05-10T00:00:00",
        "avvikelser": null,
        "idStr": "1"
    },
    {
        "id": 2,
        "namn": "Test2",
        "teamID": "2",
        "team": "Test2",
        "godkannandeNummer": "321",
        "företag": "Test2",
        "godkannandeDatum": "2012-04-26T00:00:00",
        "avvikelser": null,
        "idStr": "2"
    },
    {
        "id": 3,
        "namn": "Test3",
        "teamID": "3",
        "team": "Test2",
        "godkannandeNummer": "120",
        "företag": "Test2",
        "godkannandeDatum": "2010-10-15T00:00:00",
        "avvikelser": null,
        "idStr": "3"
    }
]

let avvikelser_data = [
    {
        "anläggningRecNo": 1,
        "namn": null,
        "tidPunkt": "2022-06-08T00:00:00",
        "motivering": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "registrerandeAnvändare": "LIVSMEDELSVERK\\Seinfeld",
        "avvikelseTyp": {
            "id": 4,
            "namn": "Tillfällig ändring har inte gjorts i tid",
            "beskrivning": "minst 5 arbetsdagar innan, 15 i samband med storhelg",
            "förslagenMotivering": null
        }
    },
    {
        "anläggningRecNo": 2,
        "namn": null,
        "tidPunkt": "2022-06-20T00:00:00",
        "motivering": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "registrerandeAnvändare": "LIVSMEDELSVERK\\Seinfeld",
        "deaktiverad": false,
        "deaktiveringsMotivering": null,
        "deaktiveringsAnvändare": null,
        "avvikelseTyp": {
            "id": 4,
            "namn": "Tillfällig ändring har inte gjorts i tid",
            "beskrivning": "minst 5 arbetsdagar innan, 15 i samband med storhelg",
            "förslagenMotivering": null
        }
    }
]

let slaktvolymer_data = [
    {
        "anlaggningID": 1,
        "anlaggningNamn": "Test",
        "antal": 134,
        "djurnamn": "Får",
        "djurtyp": 17,
        "fran": "2022-01-01T00:00:00",
        "schablon": 20.9,
        "slaktvolym": 2800.6,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 2,
        "anlaggningNamn": "Test2",
        "antal": 98,
        "djurnamn": "Älg",
        "djurtyp": 32,
        "fran": "2022-01-01T00:00:00",
        "schablon": 135,
        "slaktvolym": 13230,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 2,
        "anlaggningNamn": "Test2",
        "antal": 1217,
        "djurnamn": "Dovhjort",
        "djurtyp": 33,
        "fran": "2022-01-01T00:00:00",
        "schablon": 25,
        "slaktvolym": 30425,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 2,
        "anlaggningNamn": "Test2",
        "antal": 1327,
        "djurnamn": "Rådjur",
        "djurtyp": 31,
        "fran": "2022-01-01T00:00:00",
        "schablon": 14,
        "slaktvolym": 18578,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 2,
        "anlaggningNamn": "Test2",
        "antal": 1297,
        "djurnamn": "Vildsvin",
        "djurtyp": 35,
        "fran": "2022-01-01T00:00:00",
        "schablon": 30,
        "slaktvolym": 38910,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 2,
        "anlaggningNamn": "Test2",
        "antal": 2,
        "djurnamn": "Kronhjort",
        "djurtyp": 34,
        "fran": "2022-01-01T00:00:00",
        "schablon": 50,
        "slaktvolym": 100,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 2,
        "anlaggningNamn": "Test2",
        "antal": 14622,
        "djurnamn": "Nötkreatur",
        "djurtyp": 14,
        "fran": "2022-01-01T00:00:00",
        "schablon": 335,
        "slaktvolym": 4898370,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 3,
        "anlaggningNamn": "Test3",
        "antal": 33,
        "djurnamn": "Kalv",
        "djurtyp": 15,
        "fran": "2022-01-01T00:00:00",
        "schablon": 166.7,
        "slaktvolym": 5501.099999999999,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 3,
        "anlaggningNamn": "Test3",
        "antal": 89,
        "djurnamn": "Får",
        "djurtyp": 17,
        "fran": "2022-01-01T00:00:00",
        "schablon": 20.9,
        "slaktvolym": 1860.1,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 3,
        "anlaggningNamn": "Test3",
        "antal": 150,
        "djurnamn": "Nötkreatur",
        "djurtyp": 14,
        "fran": "2022-01-01T00:00:00",
        "schablon": 335,
        "slaktvolym": 50250,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 3,
        "anlaggningNamn": "Test3",
        "antal": 14,
        "djurnamn": "Sugga",
        "djurtyp": 19,
        "fran": "2022-01-01T00:00:00",
        "schablon": 184.6,
        "slaktvolym": 2584.4,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 3,
        "anlaggningNamn": "Test3",
        "antal": 692,
        "djurnamn": "Får",
        "djurtyp": 17,
        "fran": "2022-01-01T00:00:00",
        "schablon": 20.9,
        "slaktvolym": 14462.8,
        "till": "2022-12-31T00:00:00"
    }
]


export function getAnlaggningar() {

    return anlaggningar_data
}

export function getBerakningsUnderlag() {

   return berakningsunderlag_data
}

export function getSlaktvolymer() {

    return slaktvolymer_data
}

export function getAvvikelser() {

    return avvikelser_data
}

export function getTeamsFromApi() {

    return teams_data

}
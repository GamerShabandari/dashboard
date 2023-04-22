import berakningsunderlag_data from './berakningsunderlag_data.json';


let teams_data = [
    {
        "id": "1",
        "namn": "Team A",
        "medlemmar": [],
        "value": "Team A",
        "label": "Team A"
    },
    {
        "id": "2",
        "namn": "Team B",
        "medlemmar": [],
        "value": "Team B",
        "label": "Team B"
    },
    {
        "id": "3",
        "namn": "Team C",
        "medlemmar": [],
        "value": "Team C",
        "label": "Team C"
    },
    {
        "id": "4",
        "namn": "Team D",
        "medlemmar": [],
        "value": "Team D",
        "label": "Team D"
    },
    {
        "id": "5",
        "namn": "Team E",
        "medlemmar": [],
        "value": "Team E",
        "label": "Team E"
    },
    {
        "id": "6",
        "namn": "Team F",
        "medlemmar": [],
        "value": "Team F",
        "label": "Team F"
    }
    ,
    {
        "id": "7",
        "namn": "Team G",
        "medlemmar": [],
        "value": "Team G",
        "label": "Team G"
    }
    ,
    {
        "id": "8",
        "namn": "Team H",
        "medlemmar": [],
        "value": "Team H",
        "label": "Team H"
    }
    ,
    {
        "id": "9",
        "namn": "Team I",
        "medlemmar": [],
        "value": "Team I",
        "label": "Team I"
    }
    ,
    {
        "id": "10",
        "namn": "Team J",
        "medlemmar": [],
        "value": "Team J",
        "label": "Team J"
    }
]

let anlaggningar_data = [
    {
        "id": 1,
        "namn": "Anläggning A",
        "teamID": "1",
        "team": "Anläggning A",
        "godkannandeNummer": "396",
        "företag": "Anläggning A",
        "godkannandeDatum": "2013-05-10T00:00:00",
        "avvikelser": null,
        "idStr": "1"
    },
    {
        "id": 2,
        "namn": "Anläggning B",
        "teamID": "2",
        "team": "Anläggning B",
        "godkannandeNummer": "321",
        "företag": "Anläggning B",
        "godkannandeDatum": "2012-04-26T00:00:00",
        "avvikelser": null,
        "idStr": "2"
    },
    {
        "id": 3,
        "namn": "Anläggning C",
        "teamID": "3",
        "team": "Anläggning C",
        "godkannandeNummer": "120",
        "företag": "Anläggning C",
        "godkannandeDatum": "2010-10-15T00:00:00",
        "avvikelser": null,
        "idStr": "3"
    },
    {
        "id": 4,
        "namn": "Anläggning A",
        "teamID": "1",
        "team": "Anläggning A",
        "godkannandeNummer": "396",
        "företag": "Anläggning A",
        "godkannandeDatum": "2013-05-10T00:00:00",
        "avvikelser": null,
        "idStr": "1"
    },
    {
        "id": 5,
        "namn": "Anläggning B",
        "teamID": "2",
        "team": "Anläggning B",
        "godkannandeNummer": "321",
        "företag": "Anläggning B",
        "godkannandeDatum": "2012-04-26T00:00:00",
        "avvikelser": null,
        "idStr": "2"
    },
    {
        "id": 6,
        "namn": "Anläggning C",
        "teamID": "3",
        "team": "Anläggning C",
        "godkannandeNummer": "120",
        "företag": "Anläggning C",
        "godkannandeDatum": "2010-10-15T00:00:00",
        "avvikelser": null,
        "idStr": "3"
    },
    {
        "id": 7,
        "namn": "Anläggning A",
        "teamID": "1",
        "team": "Anläggning A",
        "godkannandeNummer": "396",
        "företag": "Anläggning A",
        "godkannandeDatum": "2013-05-10T00:00:00",
        "avvikelser": null,
        "idStr": "1"
    },
    {
        "id": 8,
        "namn": "Anläggning B",
        "teamID": "2",
        "team": "Anläggning B",
        "godkannandeNummer": "321",
        "företag": "Anläggning B",
        "godkannandeDatum": "2012-04-26T00:00:00",
        "avvikelser": null,
        "idStr": "2"
    },
    {
        "id": 9,
        "namn": "Anläggning C",
        "teamID": "3",
        "team": "Anläggning C",
        "godkannandeNummer": "120",
        "företag": "Anläggning C",
        "godkannandeDatum": "2010-10-15T00:00:00",
        "avvikelser": null,
        "idStr": "3"
    },
    {
        "id": 10,
        "namn": "Anläggning C",
        "teamID": "3",
        "team": "Anläggning C",
        "godkannandeNummer": "120",
        "företag": "Anläggning C",
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
        "motivering": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud eAercitation ullamco laboris nisi ut aliquip eA ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. EAcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "registrerandeAnvändare": "LIVSMEDELSVERK\\Seinfeld",
        "avvikelseTyp": {
            "id": 1,
            "namn": "Tillfällig ändring har inte gjorts i tid",
            "beskrivning": "minst 5 arbetsdagar innan, 15 i samband med storhelg",
            "förslagenMotivering": null
        }
    },
    {
        "anläggningRecNo": 2,
        "namn": null,
        "tidPunkt": "2022-06-20T00:00:00",
        "motivering": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud eAercitation ullamco laboris nisi ut aliquip eA ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. EAcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "registrerandeAnvändare": "LIVSMEDELSVERK\\Seinfeld",
        "deaktiverad": false,
        "deaktiveringsMotivering": null,
        "deaktiveringsAnvändare": null,
        "avvikelseTyp": {
            "id": 1,
            "namn": "Tillfällig ändring har inte gjorts i tid",
            "beskrivning": "minst 5 arbetsdagar innan, 15 i samband med storhelg",
            "förslagenMotivering": null
        }
    }
]

let slaktvolBmer_data = [
    {
        "anlaggningID": 1,
        "anlaggningNamn": "Anläggning A",
        "antal": 134,
        "djurnamn": "Får",
        "djurtBp": 17,
        "fran": "2022-01-01T00:00:00",
        "schablon": 20.9,
        "slaktvolBm": 2800.6,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 2,
        "anlaggningNamn": "Anläggning B",
        "antal": 98,
        "djurnamn": "Älg",
        "djurtBp": 32,
        "fran": "2022-01-01T00:00:00",
        "schablon": 135,
        "slaktvolBm": 13230,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 2,
        "anlaggningNamn": "Anläggning B",
        "antal": 1217,
        "djurnamn": "Dovhjort",
        "djurtBp": 33,
        "fran": "2022-01-01T00:00:00",
        "schablon": 25,
        "slaktvolBm": 30425,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 2,
        "anlaggningNamn": "Anläggning B",
        "antal": 1327,
        "djurnamn": "Rådjur",
        "djurtBp": 31,
        "fran": "2022-01-01T00:00:00",
        "schablon": 14,
        "slaktvolBm": 18578,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 2,
        "anlaggningNamn": "Anläggning B",
        "antal": 1297,
        "djurnamn": "Vildsvin",
        "djurtBp": 35,
        "fran": "2022-01-01T00:00:00",
        "schablon": 30,
        "slaktvolBm": 38910,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 2,
        "anlaggningNamn": "Anläggning B",
        "antal": 2,
        "djurnamn": "Kronhjort",
        "djurtBp": 34,
        "fran": "2022-01-01T00:00:00",
        "schablon": 50,
        "slaktvolBm": 100,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 2,
        "anlaggningNamn": "Anläggning B",
        "antal": 14622,
        "djurnamn": "Nötkreatur",
        "djurtBp": 14,
        "fran": "2022-01-01T00:00:00",
        "schablon": 335,
        "slaktvolBm": 4898370,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 3,
        "anlaggningNamn": "Anläggning C",
        "antal": 33,
        "djurnamn": "Kalv",
        "djurtBp": 15,
        "fran": "2022-01-01T00:00:00",
        "schablon": 166.7,
        "slaktvolBm": 5501.099999999999,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 3,
        "anlaggningNamn": "Anläggning C",
        "antal": 89,
        "djurnamn": "Får",
        "djurtBp": 17,
        "fran": "2022-01-01T00:00:00",
        "schablon": 20.9,
        "slaktvolBm": 1860.1,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 3,
        "anlaggningNamn": "Anläggning C",
        "antal": 150,
        "djurnamn": "Nötkreatur",
        "djurtBp": 14,
        "fran": "2022-01-01T00:00:00",
        "schablon": 335,
        "slaktvolBm": 50250,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 3,
        "anlaggningNamn": "Anläggning C",
        "antal": 14,
        "djurnamn": "Sugga",
        "djurtBp": 19,
        "fran": "2022-01-01T00:00:00",
        "schablon": 184.6,
        "slaktvolBm": 2584.4,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 3,
        "anlaggningNamn": "Anläggning C",
        "antal": 692,
        "djurnamn": "Får",
        "djurtBp": 17,
        "fran": "2022-01-01T00:00:00",
        "schablon": 20.9,
        "slaktvolBm": 14462.8,
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

    return slaktvolBmer_data
}

export function getAvvikelser() {

    return avvikelser_data
}

export function getTeamsFromApi() {

    return teams_data

}
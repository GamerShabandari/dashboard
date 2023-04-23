import berakningsunderlag_data from './berakningsunderlag_data.json';
import anlaggningar_data from './anlaggningar_data.json';
import team_data from './team_data.json';


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
            "id": 2,
            "namn": "Tillfällig ändring har inte gjorts i tid",
            "beskrivning": "minst 5 arbetsdagar innan, 15 i samband med storhelg",
            "förslagenMotivering": null
        }
    }
]

let slaktvolBmer_data = [
    {
        "anlaggningID": 1,
        "anlaggningNamn": "Team1",
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
        "anlaggningNamn": "Team2",
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
        "anlaggningNamn": "Team2",
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
        "anlaggningNamn": "Team2",
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
        "anlaggningNamn": "Team2",
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
        "anlaggningNamn": "Team2",
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
        "anlaggningNamn": "Team2",
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
        "anlaggningNamn": "Team3",
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
        "anlaggningNamn": "Team3",
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
        "anlaggningNamn": "Team3",
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
        "anlaggningNamn": "Team3",
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
        "anlaggningNamn": "Team3",
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

    return team_data

}
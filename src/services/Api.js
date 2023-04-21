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
        "id": "883d3e6d-4c7a-426a-a9a9-0a1c38ebd430",
        "namn": "OK_KLG Grupp Mitt",
        "medlemmar": [],
        "value": "OK_KLG Grupp Mitt",
        "label": "OK_KLG Grupp Mitt"
    },
    {
        "id": "71e482d7-789b-4cd1-a194-0dafe6f1f469",
        "namn": "LK_VG_TeamGränskontroll",
        "medlemmar": [],
        "value": "LK_VG_TeamGränskontroll",
        "label": "LK_VG_TeamGränskontroll"
    },
    {
        "id": "dc063779-272b-4b67-9b93-12aa5a002deb",
        "namn": "OK_KLG Team Gränskontroll",
        "medlemmar": [],
        "value": "OK_KLG Team Gränskontroll",
        "label": "OK_KLG Team Gränskontroll"
    },
    {
        "id": "0a789f76-5443-4ac8-802e-17aff2afa167",
        "namn": "LK_NM_TeamMellerstaNorrland",
        "medlemmar": [],
        "value": "LK_NM_TeamMellerstaNorrland",
        "label": "LK_NM_TeamMellerstaNorrland"
    },
    {
        "id": "a3836e79-ddac-42ec-beb6-208e7ba27f70",
        "namn": "LK_VG_TeamSkaraborg",
        "medlemmar": [],
        "value": "LK_VG_TeamSkaraborg",
        "label": "LK_VG_TeamSkaraborg"
    },
    {
        "id": "ac2d9d46-6ad9-4d75-812e-209209267572",
        "namn": "LK_VG_TeamBohuslän-Dal",
        "medlemmar": [],
        "value": "LK_VG_TeamBohuslän-Dal",
        "label": "LK_VG_TeamBohuslän-Dal"
    },
    {
        "id": "ac30c191-a8f7-4b1e-9a30-2315e96400c5",
        "namn": "LK_NM_TeamNorraNorrland",
        "medlemmar": [],
        "value": "LK_NM_TeamNorraNorrland",
        "label": "LK_NM_TeamNorraNorrland"
    },
    {
        "id": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "namn": "OK_ME Team Kalmar",
        "medlemmar": [],
        "value": "OK_ME Team Kalmar",
        "label": "OK_ME Team Kalmar"
    },
    {
        "id": "5c8410ea-01ea-4e62-95ce-35754278857c",
        "namn": "OK_SO Team Fjäderfä",
        "medlemmar": [],
        "value": "OK_SO Team Fjäderfä",
        "label": "OK_SO Team Fjäderfä"
    },
    {
        "id": "541d8460-8a57-48fd-b3c0-3e759dc5af5e",
        "namn": "OK_KLG Grupp Öst",
        "medlemmar": [],
        "value": "OK_KLG Grupp Öst",
        "label": "OK_KLG Grupp Öst"
    },
    {
        "id": "b24ade5d-295b-4441-9d1f-41e6f634678e",
        "namn": "OK_SO Team Mellersta Skåne",
        "medlemmar": [],
        "value": "OK_SO Team Mellersta Skåne",
        "label": "OK_SO Team Mellersta Skåne"
    },
    {
        "id": "81a8e3c6-e447-4fa1-ae9c-469a0de3b5cb",
        "namn": "OK_SO Team Västra Skåne och Halland",
        "medlemmar": [],
        "value": "OK_SO Team Västra Skåne och Halland",
        "label": "OK_SO Team Västra Skåne och Halland"
    },
    {
        "id": "ef6d3a19-5531-4e65-8719-4e6d86b824d9",
        "namn": "LK_VG_TeamSödraÄlvsborg",
        "medlemmar": [],
        "value": "LK_VG_TeamSödraÄlvsborg",
        "label": "LK_VG_TeamSödraÄlvsborg"
    },
    {
        "id": "f3879f1a-ece8-4ee3-afad-516e6f6e18d3",
        "namn": "KA_AS_AdministrativaStödenheten",
        "medlemmar": [],
        "value": "KA_AS_AdministrativaStödenheten",
        "label": "KA_AS_AdministrativaStödenheten"
    },
    {
        "id": "c38b1a0e-630c-4ce9-96ce-5861e39f1b45",
        "namn": "KA_GS_Gränskontroll",
        "medlemmar": [],
        "value": "KA_GS_Gränskontroll",
        "label": "KA_GS_Gränskontroll"
    },
    {
        "id": "6dffd51d-745f-431c-80a1-58ca893f97ee",
        "namn": "OK_KLG Team Mitt-Öst",
        "medlemmar": [],
        "value": "OK_KLG Team Mitt-Öst",
        "label": "OK_KLG Team Mitt-Öst"
    },
    {
        "id": "0f36afbb-d0de-4023-9131-58d760e8f4cd",
        "namn": "OK_ME Team Södra Älvsborg",
        "medlemmar": [],
        "value": "OK_ME Team Södra Älvsborg",
        "label": "OK_ME Team Södra Älvsborg"
    },
    {
        "id": "2f16e728-4739-4ed9-be70-63a34c52f213",
        "namn": "OK_ME Team Linköping",
        "medlemmar": [],
        "value": "OK_ME Team Linköping",
        "label": "OK_ME Team Linköping"
    },
    {
        "id": "9d76133a-451e-4374-8e7d-67417bd7f668",
        "namn": "OK_ME Team Skaraborg",
        "medlemmar": [],
        "value": "OK_ME Team Skaraborg",
        "label": "OK_ME Team Skaraborg"
    },
    {
        "id": "86fb80c4-b60a-4d14-a1af-6c68a6d6f2b7",
        "namn": "LK_SG_TeamNordvästraSkåne_Halland",
        "medlemmar": [],
        "value": "LK_SG_TeamNordvästraSkåne_Halland",
        "label": "LK_SG_TeamNordvästraSkåne_Halland"
    },
    {
        "id": "ff481629-00e9-4f22-b6f3-6ec30f93f13f",
        "namn": "LK_NM_TeamÖstraSvealand",
        "medlemmar": [],
        "value": "LK_NM_TeamÖstraSvealand",
        "label": "LK_NM_TeamÖstraSvealand"
    },
    {
        "id": "3e2892c4-726d-4a89-821c-753ae7e82f4a",
        "namn": "OK_NO Team Gävle-Dala",
        "medlemmar": [],
        "value": "OK_NO Team Gävle-Dala",
        "label": "OK_NO Team Gävle-Dala"
    },
    {
        "id": "7ea62677-7159-4aac-8605-7e225c502dd7",
        "namn": "OK_NO Team Norra Norrland",
        "medlemmar": [],
        "value": "OK_NO Team Norra Norrland",
        "label": "OK_NO Team Norra Norrland"
    },
    {
        "id": "38b040e4-1929-4995-8839-7f8d7bc48800",
        "namn": "LK_SG_TeamHörby",
        "medlemmar": [],
        "value": "LK_SG_TeamHörby",
        "label": "LK_SG_TeamHörby"
    },
    {
        "id": "a8cab6a4-9d02-4872-a48c-824d75285705",
        "namn": "OK_KLG Team Syd-Väst",
        "medlemmar": [],
        "value": "OK_KLG Team Syd-Väst",
        "label": "OK_KLG Team Syd-Väst"
    },
    {
        "id": "6488536d-902d-4eb0-aed5-882446af1413",
        "namn": "OK_ME Team Gotland",
        "medlemmar": [],
        "value": "OK_ME Team Gotland",
        "label": "OK_ME Team Gotland"
    },
    {
        "id": "d8ec1e14-097f-4164-b5f0-8c5feaf48513",
        "namn": "LK_ÖG_GemensamLedning",
        "medlemmar": [],
        "value": "LK_ÖG_GemensamLedning",
        "label": "LK_ÖG_GemensamLedning"
    },
    {
        "id": "26159710-f890-4898-a816-9951eb71b93b",
        "namn": "LK_SG_GemensamLedning",
        "medlemmar": [],
        "value": "LK_SG_GemensamLedning",
        "label": "LK_SG_GemensamLedning"
    },
    {
        "id": "fe6de6a8-b991-4ec0-bc2a-9a68fa5d4bc3",
        "namn": "LK_ÖG_TeamGotland",
        "medlemmar": [],
        "value": "LK_ÖG_TeamGotland",
        "label": "LK_ÖG_TeamGotland"
    },
    {
        "id": "6a603070-16f0-4828-aaa5-9c8cb9f720ef",
        "namn": "OK_KLG Grupp Nord",
        "medlemmar": [],
        "value": "OK_KLG Grupp Nord",
        "label": "OK_KLG Grupp Nord"
    },
    {
        "id": "444a81ae-643d-47d3-82af-9d28fdb89ca0",
        "namn": "Grp.IT-förvaltning eLvis",
        "medlemmar": [],
        "value": "Grp.IT-förvaltning eLvis",
        "label": "Grp.IT-förvaltning eLvis"
    },
    {
        "id": "fefbe410-cf6c-4a02-8b9f-a083f9248c77",
        "namn": "OK_ME Team Älvsborg",
        "medlemmar": [],
        "value": "OK_ME Team Älvsborg",
        "label": "OK_ME Team Älvsborg"
    },
    {
        "id": "d98bf0bf-01d4-408b-8622-a125a0f2f22b",
        "namn": "OK_SO Team Östra Skåne och Blekinge",
        "medlemmar": [],
        "value": "OK_SO Team Östra Skåne och Blekinge",
        "label": "OK_SO Team Östra Skåne och Blekinge"
    },
    {
        "id": "92355cfb-d183-4a24-9e64-ac599087b192",
        "namn": "LK_VG_GemensamLedning",
        "medlemmar": [],
        "value": "LK_VG_GemensamLedning",
        "label": "LK_VG_GemensamLedning"
    },
    {
        "id": "69234595-442f-42b1-b8ed-ae245362dd08",
        "namn": "LK_NM_TeamGävleDala",
        "medlemmar": [],
        "value": "LK_NM_TeamGävleDala",
        "label": "LK_NM_TeamGävleDala"
    },
    {
        "id": "4f674a35-42d4-4915-bd8f-c69556c83052",
        "namn": "LK_ÖG_TeamKalmar",
        "medlemmar": [],
        "value": "LK_ÖG_TeamKalmar",
        "label": "LK_ÖG_TeamKalmar"
    },
    {
        "id": "9396a3cf-35c1-4171-ab3c-c73161f8f7c6",
        "namn": "Grp.ÅtkomstPlaneringsverktyget",
        "medlemmar": [],
        "value": "Grp.ÅtkomstPlaneringsverktyget",
        "label": "Grp.ÅtkomstPlaneringsverktyget"
    },
    {
        "id": "089d5b6f-9f41-4cae-aae8-cdd9bee778d8",
        "namn": "LK_NM_TeamVästraSvealand",
        "medlemmar": [],
        "value": "LK_NM_TeamVästraSvealand",
        "label": "LK_NM_TeamVästraSvealand"
    },
    {
        "id": "808c1791-4029-4426-942d-ce3dba52b506",
        "namn": "OK_NO Team Mellersta Norrland",
        "medlemmar": [],
        "value": "OK_NO Team Mellersta Norrland",
        "label": "OK_NO Team Mellersta Norrland"
    },
    {
        "id": "953a9042-3e70-4a1f-a4ee-d5b2f5894ccc",
        "namn": "OK_NO Team Västra Svealand",
        "medlemmar": [],
        "value": "OK_NO Team Västra Svealand",
        "label": "OK_NO Team Västra Svealand"
    },
    {
        "id": "a2b703b7-a8fe-4029-8a16-d91b6b458163",
        "namn": "OK_NO Team Östra Svealand",
        "medlemmar": [],
        "value": "OK_NO Team Östra Svealand",
        "label": "OK_NO Team Östra Svealand"
    },
    {
        "id": "18e9884c-154c-4a61-9771-e8c211c2ea6a",
        "namn": "LK_SG_TeamNordöstraSkåne_Blekinge",
        "medlemmar": [],
        "value": "LK_SG_TeamNordöstraSkåne_Blekinge",
        "label": "LK_SG_TeamNordöstraSkåne_Blekinge"
    },
    {
        "id": "d29d83cb-3695-40a8-ac58-ed3536a7eb56",
        "namn": "LK_ÖG_TeamLinköping",
        "medlemmar": [],
        "value": "LK_ÖG_TeamLinköping",
        "label": "LK_ÖG_TeamLinköping"
    },
    {
        "id": "712a4e59-8a32-4200-a8d8-f6a5794afc85",
        "namn": "Kommun",
        "medlemmar": [],
        "value": "Kommun",
        "label": "Kommun"
    },
    {
        "id": "adbe230e-67a5-4d1d-8fe6-f887d1d6f138",
        "namn": "OK_KLG Grupp Väst",
        "medlemmar": [],
        "value": "OK_KLG Grupp Väst",
        "label": "OK_KLG Grupp Väst"
    },
    {
        "id": "38ae817e-03ea-4652-bc50-f9b4b271ae60",
        "namn": "OK_ME Team Bohuslän-Dalsland",
        "medlemmar": [],
        "value": "OK_ME Team Bohuslän-Dalsland",
        "label": "OK_ME Team Bohuslän-Dalsland"
    },
    {
        "id": "c600803a-2629-4bdf-9fa9-fbccd35794ea",
        "namn": "KA_GS_Stödenheten",
        "medlemmar": [],
        "value": "KA_GS_Stödenheten",
        "label": "KA_GS_Stödenheten"
    },
    {
        "id": "e89a43cd-8626-4980-a7fb-ff4a1180033a",
        "namn": "LK_SG_TeamTrelleborg",
        "medlemmar": [],
        "value": "LK_SG_TeamTrelleborg",
        "label": "LK_SG_TeamTrelleborg"
    },
    {
        "id": "fbf0f0aa-c644-48f1-9957-ffa6d5690e44",
        "namn": "LK_NM_GemensamLedning",
        "medlemmar": [],
        "value": "LK_NM_GemensamLedning",
        "label": "LK_NM_GemensamLedning"
    },
    {
        "id": "00000000-0000-0000-0000-000000000000",
        "namn": "Vikarier",
        "medlemmar": [],
        "value": "Vikarier",
        "label": "Vikarier"
    }
]

let anlaggningar_data = [
    {
        "id": 1,
        "namn": "Test",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "Test",
        "godkannandeNummer": "396",
        "företag": "Andreas Nilsson, Desemåla Gårdshandel",
        "godkannandeDatum": "2013-05-10T00:00:00",
        "avvikelser": null,
        "idStr": "201711"
    },
    {
        "id": 201098,
        "namn": "Ekovilt i Sverige AB",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": "321",
        "företag": "Ekovilt i Sverige AB",
        "godkannandeDatum": "2012-04-26T00:00:00",
        "avvikelser": null,
        "idStr": "201098"
    },
    {
        "id": 201236,
        "namn": "Ello i Lammhult Slakt AB",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": "120",
        "företag": "Ello i Lammhult Slakt AB",
        "godkannandeDatum": "2010-10-15T00:00:00",
        "avvikelser": null,
        "idStr": "201236"
    },
    {
        "id": 202156,
        "namn": "EM-Vilt AB i Malmbäck, nedlagd",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": "748",
        "företag": "EM-Vilt AB",
        "godkannandeDatum": "2016-09-14T00:00:00",
        "avvikelser": null,
        "idStr": "202156"
    },
    {
        "id": 201502,
        "namn": "Holstenskog gård, nedlagd",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": "380",
        "företag": "Arne Harrysson, Enskild firma",
        "godkannandeDatum": "2012-12-05T00:00:00",
        "avvikelser": null,
        "idStr": "201502"
    },
    {
        "id": 203080,
        "namn": "Holstenskog gård, vilande",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": "380",
        "företag": "Rickard Palm, Enskild firma",
        "godkannandeDatum": "2019-12-06T00:00:00",
        "avvikelser": null,
        "idStr": "203080"
    },
    {
        "id": 200047,
        "namn": "Jordsläta Grisar och Får HB, nedlagd",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": "329",
        "företag": "Jordsläta Grisar och Får HB",
        "godkannandeDatum": "2010-08-25T00:00:00",
        "avvikelser": null,
        "idStr": "200047"
    },
    {
        "id": 203104,
        "namn": "Jordsläta Södergård HB",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": "329",
        "företag": "Jordsläta Södergård HB",
        "godkannandeDatum": "2019-12-18T00:00:00",
        "avvikelser": null,
        "idStr": "203104"
    },
    {
        "id": 201558,
        "namn": "Kalvenäs Kött",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": "382",
        "företag": "Kalvenäs Kött AB",
        "godkannandeDatum": "2013-09-30T00:00:00",
        "avvikelser": null,
        "idStr": "201558"
    },
    {
        "id": 201223,
        "namn": "KLS Ugglarps AB, Kalmar 51",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": "51",
        "företag": "KLS Ugglarps AB",
        "godkannandeDatum": "2013-10-23T00:00:00",
        "avvikelser": null,
        "idStr": "201223"
    },
    {
        "id": 203029,
        "namn": "Malmbäcks Vilthandel AB",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": "748",
        "företag": "Malmbäcks Vilthandel AB",
        "godkannandeDatum": "2019-09-13T00:00:00",
        "avvikelser": null,
        "idStr": "203029"
    },
    {
        "id": 202072,
        "namn": "Ryssbygymnasiet",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": "745",
        "företag": "Ryssbygymnasiet AB",
        "godkannandeDatum": "2016-02-16T00:00:00",
        "avvikelser": null,
        "idStr": "202072"
    },
    {
        "id": 201635,
        "namn": "Skärshults Delikatess Manufaktur, nedlagd",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": "392",
        "företag": "Skärshults Delikatess Manufaktur AB",
        "godkannandeDatum": "2013-03-06T00:00:00",
        "avvikelser": null,
        "idStr": "201635"
    },
    {
        "id": 203576,
        "namn": "Slaktbod Ingelsbo ",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": null,
        "företag": "Ingelsbo Lantbruk AB",
        "godkannandeDatum": "0001-01-01T00:00:00",
        "avvikelser": null,
        "idStr": "203576"
    },
    {
        "id": 202501,
        "namn": "Slakteriet 1:151, nedlagd",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": "756",
        "företag": "Per-Ove Bertilsson, Enskild firma",
        "godkannandeDatum": "2017-02-28T00:00:00",
        "avvikelser": null,
        "idStr": "202501"
    },
    {
        "id": 203196,
        "namn": "Stenbo gård",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": "800",
        "företag": "Johan Segergren, Enskild firma",
        "godkannandeDatum": "2020-12-15T00:00:00",
        "avvikelser": null,
        "idStr": "203196"
    },
    {
        "id": 203625,
        "namn": "Stenbo Gård, under prövning",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": null,
        "företag": "Stenbo Gård AB",
        "godkannandeDatum": "0001-01-01T00:00:00",
        "avvikelser": null,
        "idStr": "203625"
    },
    {
        "id": 202753,
        "namn": "Tvärskogs Vilt AB",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": "95",
        "företag": "Tvärskogs Vilt AB",
        "godkannandeDatum": "2017-12-11T00:00:00",
        "avvikelser": null,
        "idStr": "202753"
    },
    {
        "id": 201954,
        "namn": "Västerslät",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": "723",
        "företag": "Håkan Västerslät, Enskild firma",
        "godkannandeDatum": "2014-06-18T00:00:00",
        "avvikelser": null,
        "idStr": "201954"
    },
    {
        "id": 202341,
        "namn": "Ölandsfiskarn, nedlagd",
        "teamID": "b92c4845-3a1e-4ee3-b5b2-33c0947632b0",
        "team": "OK_ME Team Kalmar",
        "godkannandeNummer": "742",
        "företag": "Magnus Sandin, Ölandsfiskarn",
        "godkannandeDatum": "2016-06-29T00:00:00",
        "avvikelser": null,
        "idStr": "202341"
    }
]

let avvikelser_data = [
    {
        "anläggningRecNo": 1,
        "namn": null,
        "tidPunkt": "2022-06-08T00:00:00",
        "motivering": "Företaget informerade den 8 juni 2022 om en tillfällig ändring av sitt slaktschema den 18 juni. En anmälan om en tillfällig ändring av ett slaktschema ska göras senast fem arbetsdagar innan önskad dag för besiktning enligt 7 § Livsmedelsverkets föreskrifter (LIVSFS 2021:9) om planering av besiktning före och efter slakt. Om anmälan avser första veckan i januari, veckan före och efter påsk, juni, juli, augusti eller de två sista veckorna i december ska den ske senast 15 arbetsdagar innan önskad dag för besiktning. Något verkligt behov av slakt har inte framkommit.",
        "registrerandeAnvändare": "LIVSMEDELSVERK\\marijo",
        "deaktiverad": false,
        "deaktiveringsMotivering": null,
        "deaktiveringsAnvändare": null,
        "avvikelseTyp": {
            "id": 4,
            "namn": "Tillfällig ändring har inte gjorts i tid",
            "beskrivning": "minst 5 arbetsdagar innan, 15 i samband med storhelg",
            "förslagenMotivering": null
        }
    },
    {
        "anläggningRecNo": 201223,
        "namn": null,
        "tidPunkt": "2022-06-20T00:00:00",
        "motivering": "Företaget informerade den 2o juni om en tillfällig ändring av sitt slaktschema den 2 juli. En anmälan om en tillfällig ändring av ett slaktschema ska göras senast fem arbetsdagar innan önskad dag för besiktning enligt 7 § Livsmedelsverkets föreskrifter (LIVSFS 2021:9) om planering av besiktning före och efter slakt. Om anmälan avser första veckan i januari, veckan före och efter påsk, juni, juli, augusti eller de två sista veckorna i december ska den ske senast 15 arbetsdagar innan önskad dag för besiktning. Något verkligt behov av slakt har inte framkommit.",
        "registrerandeAnvändare": "LIVSMEDELSVERK\\marijo",
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
        "anlaggningNamn": "Desemåla Gårdshandel",
        "antal": 134,
        "djurnamn": "Får",
        "djurtyp": 17,
        "fran": "2022-01-01T00:00:00",
        "schablon": 20.9,
        "slaktvolym": 2800.6,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201098,
        "anlaggningNamn": "Ekovilt i Sverige AB",
        "antal": 98,
        "djurnamn": "Älg",
        "djurtyp": 32,
        "fran": "2022-01-01T00:00:00",
        "schablon": 135,
        "slaktvolym": 13230,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201098,
        "anlaggningNamn": "Ekovilt i Sverige AB",
        "antal": 1217,
        "djurnamn": "Dovhjort",
        "djurtyp": 33,
        "fran": "2022-01-01T00:00:00",
        "schablon": 25,
        "slaktvolym": 30425,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201098,
        "anlaggningNamn": "Ekovilt i Sverige AB",
        "antal": 1327,
        "djurnamn": "Rådjur",
        "djurtyp": 31,
        "fran": "2022-01-01T00:00:00",
        "schablon": 14,
        "slaktvolym": 18578,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201098,
        "anlaggningNamn": "Ekovilt i Sverige AB",
        "antal": 1297,
        "djurnamn": "Vildsvin",
        "djurtyp": 35,
        "fran": "2022-01-01T00:00:00",
        "schablon": 30,
        "slaktvolym": 38910,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201098,
        "anlaggningNamn": "Ekovilt i Sverige AB",
        "antal": 2,
        "djurnamn": "Kronhjort",
        "djurtyp": 34,
        "fran": "2022-01-01T00:00:00",
        "schablon": 50,
        "slaktvolym": 100,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201236,
        "anlaggningNamn": "Ello i Lammhult Slakt AB",
        "antal": 14622,
        "djurnamn": "Nötkreatur",
        "djurtyp": 14,
        "fran": "2022-01-01T00:00:00",
        "schablon": 335,
        "slaktvolym": 4898370,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201236,
        "anlaggningNamn": "Ello i Lammhult Slakt AB",
        "antal": 33,
        "djurnamn": "Kalv",
        "djurtyp": 15,
        "fran": "2022-01-01T00:00:00",
        "schablon": 166.7,
        "slaktvolym": 5501.099999999999,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 203104,
        "anlaggningNamn": "Jordsläta Södergård HB",
        "antal": 89,
        "djurnamn": "Får",
        "djurtyp": 17,
        "fran": "2022-01-01T00:00:00",
        "schablon": 20.9,
        "slaktvolym": 1860.1,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201558,
        "anlaggningNamn": "Kalvenäs Kött",
        "antal": 150,
        "djurnamn": "Nötkreatur",
        "djurtyp": 14,
        "fran": "2022-01-01T00:00:00",
        "schablon": 335,
        "slaktvolym": 50250,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201558,
        "anlaggningNamn": "Kalvenäs Kött",
        "antal": 14,
        "djurnamn": "Sugga",
        "djurtyp": 19,
        "fran": "2022-01-01T00:00:00",
        "schablon": 184.6,
        "slaktvolym": 2584.4,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201558,
        "anlaggningNamn": "Kalvenäs Kött",
        "antal": 692,
        "djurnamn": "Får",
        "djurtyp": 17,
        "fran": "2022-01-01T00:00:00",
        "schablon": 20.9,
        "slaktvolym": 14462.8,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201558,
        "anlaggningNamn": "Kalvenäs Kött",
        "antal": 114,
        "djurnamn": "Slaktsvin",
        "djurtyp": 18,
        "fran": "2022-01-01T00:00:00",
        "schablon": 93.7,
        "slaktvolym": 10681.800000000001,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201558,
        "anlaggningNamn": "Kalvenäs Kött",
        "antal": 25,
        "djurnamn": "Hästdjur",
        "djurtyp": 20,
        "fran": "2022-01-01T00:00:00",
        "schablon": 301,
        "slaktvolym": 7525,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201558,
        "anlaggningNamn": "Kalvenäs Kött",
        "antal": 3,
        "djurnamn": "Get",
        "djurtyp": 16,
        "fran": "2022-01-01T00:00:00",
        "schablon": 13.5,
        "slaktvolym": 40.5,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201223,
        "anlaggningNamn": "KLS Ugglarps AB, Kalmar 51",
        "antal": 51797,
        "djurnamn": "Nötkreatur",
        "djurtyp": 14,
        "fran": "2022-01-01T00:00:00",
        "schablon": 335,
        "slaktvolym": 17351995,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201223,
        "anlaggningNamn": "KLS Ugglarps AB, Kalmar 51",
        "antal": 34158,
        "djurnamn": "Får",
        "djurtyp": 17,
        "fran": "2022-01-01T00:00:00",
        "schablon": 20.9,
        "slaktvolym": 713902.2,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201223,
        "anlaggningNamn": "KLS Ugglarps AB, Kalmar 51",
        "antal": 395521,
        "djurnamn": "Slaktsvin",
        "djurtyp": 18,
        "fran": "2022-01-01T00:00:00",
        "schablon": 93.7,
        "slaktvolym": 37060317.7,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201223,
        "anlaggningNamn": "KLS Ugglarps AB, Kalmar 51",
        "antal": 1242,
        "djurnamn": "Sugga",
        "djurtyp": 19,
        "fran": "2022-01-01T00:00:00",
        "schablon": 184.6,
        "slaktvolym": 229273.19999999998,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201223,
        "anlaggningNamn": "KLS Ugglarps AB, Kalmar 51",
        "antal": 21,
        "djurnamn": "Kalv",
        "djurtyp": 15,
        "fran": "2022-01-01T00:00:00",
        "schablon": 166.7,
        "slaktvolym": 3500.7,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 203029,
        "anlaggningNamn": "Malmbäcks Vilthandel AB",
        "antal": 491,
        "djurnamn": "Dovhjort",
        "djurtyp": 33,
        "fran": "2022-01-01T00:00:00",
        "schablon": 25,
        "slaktvolym": 12275,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 203029,
        "anlaggningNamn": "Malmbäcks Vilthandel AB",
        "antal": 82,
        "djurnamn": "Rådjur",
        "djurtyp": 31,
        "fran": "2022-01-01T00:00:00",
        "schablon": 14,
        "slaktvolym": 1148,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 203029,
        "anlaggningNamn": "Malmbäcks Vilthandel AB",
        "antal": 472,
        "djurnamn": "Vildsvin",
        "djurtyp": 35,
        "fran": "2022-01-01T00:00:00",
        "schablon": 30,
        "slaktvolym": 14160,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 203029,
        "anlaggningNamn": "Malmbäcks Vilthandel AB",
        "antal": 23,
        "djurnamn": "Kronhjort",
        "djurtyp": 34,
        "fran": "2022-01-01T00:00:00",
        "schablon": 50,
        "slaktvolym": 1150,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 203029,
        "anlaggningNamn": "Malmbäcks Vilthandel AB",
        "antal": 8,
        "djurnamn": "Älg",
        "djurtyp": 32,
        "fran": "2022-01-01T00:00:00",
        "schablon": 135,
        "slaktvolym": 1080,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 203029,
        "anlaggningNamn": "Malmbäcks Vilthandel AB",
        "antal": 17,
        "djurnamn": "Mufflonfår",
        "djurtyp": 36,
        "fran": "2022-01-01T00:00:00",
        "schablon": 20.1,
        "slaktvolym": 341.70000000000005,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 203029,
        "anlaggningNamn": "Malmbäcks Vilthandel AB",
        "antal": 10622,
        "djurnamn": "Vild fågel",
        "djurtyp": 38,
        "fran": "2022-01-01T00:00:00",
        "schablon": 1,
        "slaktvolym": 10622,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 202072,
        "anlaggningNamn": "Ryssbygymnasiet",
        "antal": 13,
        "djurnamn": "Rådjur",
        "djurtyp": 31,
        "fran": "2022-01-01T00:00:00",
        "schablon": 14,
        "slaktvolym": 182,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 202072,
        "anlaggningNamn": "Ryssbygymnasiet",
        "antal": 43,
        "djurnamn": "Dovhjort",
        "djurtyp": 33,
        "fran": "2022-01-01T00:00:00",
        "schablon": 25,
        "slaktvolym": 1075,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 202072,
        "anlaggningNamn": "Ryssbygymnasiet",
        "antal": 5,
        "djurnamn": "Älg",
        "djurtyp": 32,
        "fran": "2022-01-01T00:00:00",
        "schablon": 135,
        "slaktvolym": 675,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 202072,
        "anlaggningNamn": "Ryssbygymnasiet",
        "antal": 10,
        "djurnamn": "Vildsvin",
        "djurtyp": 35,
        "fran": "2022-01-01T00:00:00",
        "schablon": 30,
        "slaktvolym": 300,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 202072,
        "anlaggningNamn": "Ryssbygymnasiet",
        "antal": 11,
        "djurnamn": "Kronhjort",
        "djurtyp": 34,
        "fran": "2022-01-01T00:00:00",
        "schablon": 50,
        "slaktvolym": 550,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 202072,
        "anlaggningNamn": "Ryssbygymnasiet",
        "antal": 269,
        "djurnamn": "Vild fågel",
        "djurtyp": 38,
        "fran": "2022-01-01T00:00:00",
        "schablon": 1,
        "slaktvolym": 269,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 203196,
        "anlaggningNamn": "Stenbo gård",
        "antal": 299,
        "djurnamn": "Vildsvin",
        "djurtyp": 35,
        "fran": "2022-01-01T00:00:00",
        "schablon": 30,
        "slaktvolym": 8970,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 203196,
        "anlaggningNamn": "Stenbo gård",
        "antal": 170,
        "djurnamn": "Rådjur",
        "djurtyp": 31,
        "fran": "2022-01-01T00:00:00",
        "schablon": 14,
        "slaktvolym": 2380,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 203196,
        "anlaggningNamn": "Stenbo gård",
        "antal": 59,
        "djurnamn": "Kronhjort",
        "djurtyp": 34,
        "fran": "2022-01-01T00:00:00",
        "schablon": 50,
        "slaktvolym": 2950,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 203196,
        "anlaggningNamn": "Stenbo gård",
        "antal": 132,
        "djurnamn": "Dovhjort",
        "djurtyp": 33,
        "fran": "2022-01-01T00:00:00",
        "schablon": 25,
        "slaktvolym": 3300,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 203196,
        "anlaggningNamn": "Stenbo gård",
        "antal": 15,
        "djurnamn": "Älg",
        "djurtyp": 32,
        "fran": "2022-01-01T00:00:00",
        "schablon": 135,
        "slaktvolym": 2025,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 203196,
        "anlaggningNamn": "Stenbo gård",
        "antal": 3,
        "djurnamn": "Mufflonfår",
        "djurtyp": 36,
        "fran": "2022-01-01T00:00:00",
        "schablon": 20.1,
        "slaktvolym": 60.300000000000004,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 202753,
        "anlaggningNamn": "Tvärskogs Vilt AB",
        "antal": 3997,
        "djurnamn": "Dovhjort",
        "djurtyp": 33,
        "fran": "2022-01-01T00:00:00",
        "schablon": 25,
        "slaktvolym": 99925,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 202753,
        "anlaggningNamn": "Tvärskogs Vilt AB",
        "antal": 3500,
        "djurnamn": "Vildsvin",
        "djurtyp": 35,
        "fran": "2022-01-01T00:00:00",
        "schablon": 30,
        "slaktvolym": 105000,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 202753,
        "anlaggningNamn": "Tvärskogs Vilt AB",
        "antal": 401,
        "djurnamn": "Kronhjort",
        "djurtyp": 34,
        "fran": "2022-01-01T00:00:00",
        "schablon": 50,
        "slaktvolym": 20050,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 202753,
        "anlaggningNamn": "Tvärskogs Vilt AB",
        "antal": 150,
        "djurnamn": "Älg",
        "djurtyp": 32,
        "fran": "2022-01-01T00:00:00",
        "schablon": 135,
        "slaktvolym": 20250,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 202753,
        "anlaggningNamn": "Tvärskogs Vilt AB",
        "antal": 1853,
        "djurnamn": "Rådjur",
        "djurtyp": 31,
        "fran": "2022-01-01T00:00:00",
        "schablon": 14,
        "slaktvolym": 25942,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 202753,
        "anlaggningNamn": "Tvärskogs Vilt AB",
        "antal": 68,
        "djurnamn": "Mufflonfår",
        "djurtyp": 36,
        "fran": "2022-01-01T00:00:00",
        "schablon": 20.1,
        "slaktvolym": 1366.8000000000002,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 202753,
        "anlaggningNamn": "Tvärskogs Vilt AB",
        "antal": 5469,
        "djurnamn": "Vild fågel",
        "djurtyp": 38,
        "fran": "2022-01-01T00:00:00",
        "schablon": 1,
        "slaktvolym": 5469,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201954,
        "anlaggningNamn": "Västerslät",
        "antal": 771,
        "djurnamn": "Slaktsvin",
        "djurtyp": 18,
        "fran": "2022-01-01T00:00:00",
        "schablon": 93.7,
        "slaktvolym": 72242.7,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201954,
        "anlaggningNamn": "Västerslät",
        "antal": 949,
        "djurnamn": "Får",
        "djurtyp": 17,
        "fran": "2022-01-01T00:00:00",
        "schablon": 20.9,
        "slaktvolym": 19834.1,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201954,
        "anlaggningNamn": "Västerslät",
        "antal": 9,
        "djurnamn": "Sugga",
        "djurtyp": 19,
        "fran": "2022-01-01T00:00:00",
        "schablon": 184.6,
        "slaktvolym": 1661.3999999999999,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201954,
        "anlaggningNamn": "Västerslät",
        "antal": 68,
        "djurnamn": "Get",
        "djurtyp": 16,
        "fran": "2022-01-01T00:00:00",
        "schablon": 13.5,
        "slaktvolym": 918,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201954,
        "anlaggningNamn": "Västerslät",
        "antal": 23,
        "djurnamn": "Dovhjort",
        "djurtyp": 33,
        "fran": "2022-01-01T00:00:00",
        "schablon": 25,
        "slaktvolym": 575,
        "till": "2022-12-31T00:00:00"
    },
    {
        "anlaggningID": 201954,
        "anlaggningNamn": "Västerslät",
        "antal": 3,
        "djurnamn": "Kronhjort",
        "djurtyp": 34,
        "fran": "2022-01-01T00:00:00",
        "schablon": 50,
        "slaktvolym": 150,
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
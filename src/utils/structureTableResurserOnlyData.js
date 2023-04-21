export function structureTableResurserOnlyData(tableDataToStructureProp, berakningsUnderlagProp) {

    let tableDataToStructure = structuredClone(tableDataToStructureProp);

    let berakningsUnderlag = structuredClone(berakningsUnderlagProp);

    let tableFormated = [] // viktigt ta ej bort

    let tableColumns = []

    let EjFiltreradAktivitetsval = []


    // skapa en lista med alla giltiga anläggningars id då API ger alla anläggningar som finns oavsett team
    let listaMedAnlaggningsIDn = tableDataToStructure.map((anlaggning) => {
        return anlaggning.id
    })

    // lista med allt beräkningsunderlag som matchar ovan id nummer
    let finalBerakningsUnderlag = berakningsUnderlag.filter(anl => listaMedAnlaggningsIDn.includes(anl.anläggningRecno));


    // gå igenom underlag och ta fram alla resurser som finns som matchar någon av ovan listas anläggningsIDn
    let tableData = []
    finalBerakningsUnderlag.forEach((anl) => {
        anl.tidrapporter.forEach((r) => {
            tableData.push({ namn: r.resursIdText, anläggningRecno: anl.anläggningRecno })
        })
    })

    // // filtrera bort alla dubletter 
    let tableDataFiltrerad = tableData.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.namn === value.namn
        ))
    )

    // // sortera alla resurser albabetiskt
    tableDataFiltrerad.sort((a, b) => {
        const nameA = a.namn.toUpperCase();
        const nameB = b.namn.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });


    let completeTableData = tableDataFiltrerad.map((tableRow) => {


        Object.assign(tableRow, { summa: 0 });

        // skapa första subRow och populera alla kolumner i tabellen dynamiskt
        let firstSubRow = []
        finalBerakningsUnderlag.forEach((anl) => {
            anl.tidrapporter.forEach((rapport) => {

                // uppdatera EjFiltreradAktivitetsval för att hantera användarens möjlighet att filtrera tabell på aktiviteter
                EjFiltreradAktivitetsval.push({ label: rapport.aktivitet, value: rapport.aktivitet });
                // populera första Subrow med datum
                if (rapport.resursIdText === tableRow.namn) {
                    let datumFormaterat = new Date(rapport.transaktionsdatum).toLocaleDateString("sv-SE",
                        {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit"
                        })
                    firstSubRow.push({ namn: datumFormaterat, anläggningRecno: anl.anläggningRecno, transaktionsdatum: rapport.transaktionsdatum })
                    // räkna ut summan per resurs och avrunda till 2 decimaler
                    let summan = Number(tableRow.summa) + Number(rapport.timmar)
                    tableRow.summa = summan.toFixed(2);
                }

                if (Number(rapport.arbetstypKod) < 10) {
                    tableColumns.push({ Header: String("00" + rapport.arbetstypKod), accessor: String(rapport.arbetstypKod) })
                    return
                }
                if (Number(rapport.arbetstypKod) < 100) {
                    tableColumns.push({ Header: String("0" + rapport.arbetstypKod), accessor: String(rapport.arbetstypKod) })
                    return
                }
                // populera alla kolumner i tabellen
                tableColumns.push({ Header: String(rapport.arbetstypKod), accessor: String(rapport.arbetstypKod) })
            })
        })

        let firstSubRowFiltrerad = firstSubRow.filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.namn === value.namn
            ))
        )

        Object.assign(tableRow, { subRows: [...firstSubRowFiltrerad] })

        // skapa andra subRow som är alla aktiviteter
        tableRow.subRows.forEach((rowWithDate) => {
            let secondSubRow = []
            finalBerakningsUnderlag.forEach((anl) => {
                if (anl.anläggningRecno !== rowWithDate.anläggningRecno) {
                    return
                }

                anl.tidrapporter.forEach((rapport) => {

                    if (rapport.resursIdText === tableRow.namn && rapport.transaktionsdatum && rowWithDate.transaktionsdatum) {
                        secondSubRow.push({ namn: String(rapport.aktivitet), summa: 0 })
                    }
                })
            })

            let secondsSubRowFiltrerad = secondSubRow.filter((value, index, self) =>
                index === self.findIndex((t) => (
                    t.namn === value.namn
                ))
            )

            Object.assign(rowWithDate, { subRows: [...secondsSubRowFiltrerad] })
        })


        tableRow.subRows.forEach((rowWithDate) => {
            rowWithDate.subRows.forEach((rowWithAktivitet, index) => {
                let summan = 0

                finalBerakningsUnderlag.forEach((anl) => {
                    if (anl.anläggningRecno !== rowWithDate.anläggningRecno) {
                        return
                    }
                    anl.tidrapporter.forEach((rapport) => {
                        if (rapport.resursIdText === tableRow.namn && rowWithDate.transaktionsdatum === rapport.transaktionsdatum && Number(rapport.aktivitet) === Number(rowWithAktivitet.namn)) {
                            let { arbetstypKod } = rapport;
                            let arbetstypKodString = String(arbetstypKod)
                            summan = summan + Number(rapport.timmar)
                            Object.assign(rowWithAktivitet, { [arbetstypKodString]: String(rapport.timmar) })
                        }
                    })
                })

                rowWithAktivitet.summa = summan
                if (summan === 0) {
                    rowWithDate.subRows.splice(index, 1)
                    index--
                }
            })
        })


        return tableRow

    })

    // filtrera bort alla dubletter från listan med aktivitetsval
    let filtreradAktivitetsval = EjFiltreradAktivitetsval.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.label === value.label
        ))
    )

    return tableFormated = [completeTableData, tableColumns, filtreradAktivitetsval];
}
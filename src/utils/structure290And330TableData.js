export function structure290And330TableData(tableDataToStructureProp, berakningsUnderlagProp) {

    let tableDataToStructure = structuredClone(tableDataToStructureProp);

    let berakningsUnderlag = structuredClone(berakningsUnderlagProp);

    berakningsUnderlag.forEach(anl => {
        let res = anl.tidrapporter.filter(rapport => rapport.arbetstypKod === 290 || rapport.arbetstypKod === 330);
        Object.assign(anl, { tidrapporter: [...res] })
    });
    let berakningsUnderlagFinal = berakningsUnderlag.filter(a => a.tidrapporter.length !== 0);
    
    let tableFormated = [] // viktigt ta ej bort

    let tableColumns = []

    let EjFiltreradAktivitetsval = []

    let totalSummaTeamOchPeriod = 0

    let completeTableData = tableDataToStructure.map((anl) => {

        let updatedAnl = anl

        // skapa nya properties med startvärden som sedan justeras längre ner i koden
        if (updatedAnl.status !== "hide") {
            Object.assign(updatedAnl, { status: "empty" });
        }

        Object.assign(updatedAnl, { summa: 0 });

        berakningsUnderlagFinal.forEach(a => {
            if (updatedAnl.id !== a.anläggningRecno) {
                return;
            }

            // skapa dynamiska kolumner till tabellen baserat på arbetstypkoder
            a.tidrapporter.forEach((rapport) => {

                if (Number(rapport.arbetstypKod) < 10) {
                    tableColumns.push({ Header: String("00" + rapport.arbetstypKod), accessor: String(rapport.arbetstypKod), arbetstypKodText: rapport.arbetstypKodText })
                    return
                }
                if (Number(rapport.arbetstypKod) < 100) {
                    tableColumns.push({ Header: String("0" + rapport.arbetstypKod), accessor: String(rapport.arbetstypKod), arbetstypKodText: rapport.arbetstypKodText })
                    return
                }
                tableColumns.push({ Header: String(rapport.arbetstypKod), accessor: String(rapport.arbetstypKod), arbetstypKodText: rapport.arbetstypKodText })
            });

            // om en match har skett växla status till active, för senare filtrering av tabell baserat på detta värde
            updatedAnl.status = "active";

            // loopa igenom alla rapporter och räkna ihop summan av alla timmar 
            a.tidrapporter.forEach(rapport => updatedAnl.summa = updatedAnl.summa + rapport.timmar);

            // loopa igenom alla rapporter och skapa en array med alla aktiviteter och intäktskategorier och resurser
            let resurserMedKomplettInfo = []
            let intaktsKategoriKoder = []
            let startArray = []

            a.tidrapporter.forEach((rapport) => {
                startArray.push({ namn: rapport.aktivitet })
                totalSummaTeamOchPeriod = totalSummaTeamOchPeriod + rapport.timmar

                // uppdatera EjFiltreradAktivitetsval för att hantera användarens möjlighet att filtrera tabell på aktiviteter
                EjFiltreradAktivitetsval.push({ label: rapport.aktivitet, value: rapport.aktivitet });

                intaktsKategoriKoder.push({ namn: rapport.intäktskategoriKodText, aktivitet: rapport.aktivitet })

                let { arbetstypKod } = rapport;
                Object.assign(updatedAnl, { [arbetstypKod]: 0 });

                // skapa upp ett objekt för varje resurs med all relevant info
                let resrsObj = {
                    aktivitet: rapport.aktivitet,
                    resursIdText: rapport.resursIdText,
                    resursId: rapport.resursId,
                    arbetstypKod: rapport.arbetstypKod,
                    intäktskategoriKod: rapport.intäktskategoriKod,
                    intäktskategoriKodText: rapport.intäktskategoriKodText,
                    transaktionsdatum: rapport.transaktionsdatum,
                    tidskod: rapport.tidskod,
                    timmar: rapport.timmar
                }
                resurserMedKomplettInfo.push(resrsObj)
            });

            // räkna ihop och avrunda alla tider för anläggning, populera därefter tabell med dessa           
            a.tidrapporter.forEach((rapport) => {

                let { arbetstypKod } = rapport;
                let { timmar } = rapport;
                let previousCount = updatedAnl[arbetstypKod]
                let newCount = Number(previousCount) + Number(timmar)
                let newCountAvrundat = newCount.toFixed(2);
                Object.assign(updatedAnl, { [arbetstypKod]: newCountAvrundat });
            });

            // filtrera ovan startArray och ta bort eventuella dubbletter 
            let filtreradStartArray = startArray.filter((value, index, self) =>
                index === self.findIndex((t) => (
                    t.namn === value.namn
                ))
            )

            // filtrera ovan intaktsKategoriKoder och ta bort eventuella dubbletter 
            let filtreradintaktsKategoriKoder = intaktsKategoriKoder.filter((value, index, self) =>
                index === self.findIndex((t) => (
                    t.namn === value.namn && t.aktivitet === value.aktivitet
                ))
            )

            // filtrera ovan resurserMedKomplettInfo och ta bort eventuella dubbletter 
            let filtreradResurser = resurserMedKomplettInfo.filter((value, index, self) =>
                index === self.findIndex((t) => (
                    t.resursIdText === value.resursIdText && t.aktivitet === value.aktivitet
                ))
            )

            // lägg till första nivån av subRows till tabellen som ska vara alla aktiviteter
            Object.assign(updatedAnl, { subRows: [...filtreradStartArray] });

            // lägg till andra nivån av subRows till tabellen som ska vara alla intäkskategorikoder
            updatedAnl.subRows.forEach((subRow) => {

                let tempIntaktsKategoriKodArray = []
                filtreradintaktsKategoriKoder.forEach((intaktsKategoriKod) => {
                    if (subRow.namn === intaktsKategoriKod.aktivitet) {
                        tempIntaktsKategoriKodArray.push(intaktsKategoriKod)
                    }
                })
                Object.assign(subRow, { subRows: [...tempIntaktsKategoriKodArray] })
            });

            // populera intäktskategorier med resurser
            updatedAnl.subRows.forEach((subRow) => {
                subRow.subRows.forEach((secondLayerOfSubRow) => {

                    let newSubRowToPopulateWithResurser = []

                    filtreradResurser.forEach((resurs) => {
                        if (resurs.intäktskategoriKodText === secondLayerOfSubRow.namn && resurs.aktivitet === secondLayerOfSubRow.aktivitet) {
                            newSubRowToPopulateWithResurser.push({ namn: resurs.resursIdText })
                        }
                    })
                    Object.assign(secondLayerOfSubRow, { subRows: [...newSubRowToPopulateWithResurser] })
                })
            });

            // // populera resurser med tidskoder, därefter populera alla tidskoder med alla datum och timmar som loggats
            updatedAnl.subRows.forEach((subRow) => {

                subRow.subRows.forEach((secondLayerOfSubRow) => {

                    secondLayerOfSubRow.subRows.forEach((thirdLayerOfSubRow) => {

                        let newSubRowToPopulateWithTidskoder = []

                        resurserMedKomplettInfo.forEach((resurs) => {

                            if (resurs.resursIdText === thirdLayerOfSubRow.namn) {
                                newSubRowToPopulateWithTidskoder.push({ namn: resurs.tidskod, resursId: resurs.resursId })
                            }
                        })

                        let filtreradTidskoder = newSubRowToPopulateWithTidskoder.filter((value, index, self) =>
                            index === self.findIndex((t) => (
                                t.namn === value.namn
                            ))
                        )
                        // populera filtrerade tidskoder per resurs
                        Object.assign(thirdLayerOfSubRow, { subRows: [...filtreradTidskoder] })

                        thirdLayerOfSubRow.subRows.forEach((tidskod) => {

                            let newSubRowToPopulateWithTimmar = []

                            resurserMedKomplettInfo.forEach((resurs) => {

                                if (resurs.resursId === tidskod.resursId && resurs.tidskod === tidskod.namn && resurs.aktivitet === secondLayerOfSubRow.aktivitet) {
                                    let { arbetstypKod } = resurs;
                                    let arbetstypKodString = String(arbetstypKod)
                                    let datumFormaterat = new Date(resurs.transaktionsdatum).toLocaleDateString("sv-SE",
                                        {
                                            year: "numeric",
                                            month: "2-digit",
                                            day: "2-digit"
                                        })

                                    newSubRowToPopulateWithTimmar.push({ namn: datumFormaterat, [arbetstypKodString]: String(resurs.timmar) })
                                }
                            })
                            // populera datum och timmar per resurs och tidskod
                            Object.assign(tidskod, { subRows: [...newSubRowToPopulateWithTimmar] })
                        })
                    })
                })
            });
        });

        // runda av updatedAnl.summa till endast 2 decimaler
        let summaAvrundat = updatedAnl.summa.toFixed(2);
        updatedAnl.summa = summaAvrundat
        return updatedAnl
    })

    // filtrera bort alla dubletter från listan med aktivitetsval
    let filtreradAktivitetsval = EjFiltreradAktivitetsval.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.label === value.label
        ))
    )

    let totalSummaGivenSokning = {
        summa: "Total summa: " + totalSummaTeamOchPeriod.toFixed(2)
    }

    completeTableData.push(totalSummaGivenSokning)

    return tableFormated = [completeTableData, tableColumns, filtreradAktivitetsval];
}
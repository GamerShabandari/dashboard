export function structureTableAvvikelserOnlyData(avvikelserProp, anlaggningarProp) {

    let tableDataToStructure = structuredClone(avvikelserProp);

    let anlaggningar = structuredClone(anlaggningarProp);

    let tableFormated = [] // viktigt ta ej bort

    let tableData = []

    let anläggningsNamn = ""

    tableDataToStructure.forEach((anl) => {
        anläggningsNamn = anlaggningar.find(( anlaggning ) => anlaggning.id === anl.anläggningRecNo);

        //tableData.push({ namn: anl.namn, anläggningRecNo: anl.anläggningRecNo })
        tableData.push({ namn: anläggningsNamn.namn, anläggningRecNo: anl.anläggningRecNo })
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

        let firstSubRowArray = []
    
        tableDataToStructure.forEach((anl) => {

            if (anl.anläggningRecNo === tableRow.anläggningRecNo) {

                let datumFormaterat = new Date(anl.tidPunkt).toLocaleDateString("sv-SE",
                    {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit"
                    })

                firstSubRowArray.push(
                    {
                        namn: anläggningsNamn.namn,
                        tidpunkt: datumFormaterat,
                        avvikelsetyp: anl.avvikelseTyp.namn,
                        motivering: anl.motivering
                    })
            }
        })

        Object.assign(tableRow, { subRows: [...firstSubRowArray] })

        return tableRow
    })


    return tableFormated = [...completeTableData];
}
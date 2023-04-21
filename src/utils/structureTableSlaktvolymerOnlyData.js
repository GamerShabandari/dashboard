export function structureTableSlaktvolymerOnlyData(slaktvolymerProp) {

    let tableDataToStructure = structuredClone(slaktvolymerProp);

    let tableFormated = [] // viktigt ta ej bort

    let tableData = []
    tableDataToStructure.forEach((anl) => {

        tableData.push({ namn: anl.anlaggningNamn, anlaggningID: anl.anlaggningID })

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
        let totalAntalDjur = 0

        tableDataToStructure.forEach((anl) => {

            if (anl.anlaggningID === tableRow.anlaggningID) {

                totalAntalDjur = totalAntalDjur + anl.antal

                firstSubRowArray.push(
                    {
                        namn: anl.djurnamn,
                        antal: anl.antal,
                        kg: anl.schablon,
                        volym: (anl.slaktvolym / 1000).toFixed(2)
                    })
            }
        })

        let totalAntalDjurRow = `Total antal djur: ${totalAntalDjur}`
        firstSubRowArray.push({ namn: totalAntalDjurRow })

        Object.assign(tableRow, { subRows: [...firstSubRowArray] })

        return tableRow
    })

    
    return tableFormated = [...completeTableData];
}
import React from 'react'
import { useTable, useExpanded } from 'react-table'
import { MdAdd, MdRemove } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion"


export function ResursTables({ completeTableData, tableColumns, choice, startDateToShowInUI, endDateToShowInUI }) {

    let headerTextInformation = `${choice}: ${startDateToShowInUI} - ${endDateToShowInUI}`

    // filtrera tableColumns och ta bort eventuella dubbletter
    let filtreradColumnArray = tableColumns.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.Header === value.Header
        ))
    )
    // sortera alla kolumner 
    filtreradColumnArray.sort((a, b) => Number(a.Header) - Number(b.Header));

    // all data för att skapa dynamiska kolumner
    let dynamicColumns = [...filtreradColumnArray]
    // all data för att skapa tabell
    let data = [...completeTableData]

    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    function Table({ columns: userColumns, data }) {
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
            state: { expanded },
        } = useTable(
            {
                columns: userColumns,
                data,
            },
            useExpanded // Use the useExpanded plugin hook
        )

        return (
            <>
                <table
                    className='resursTable'
                    key="tabellen"
                    exit={{
                        opacity: 0, transition: {
                            duration: 2.2,
                            ease: "easeInOut"
                        }
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1, transition: {
                            duration: 1.3,
                            ease: "easeInOut"
                        }
                    }}
                    {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr
                                {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column, index) => (
                                    <th className={column.Header === "Summa" ? 'resurssumma' : index === 1 ? 'resursTableHeader' : ""} {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        <AnimatePresence>
                            {rows.map((row, i) => {
                                prepareRow(row)
                                return (
                                    <motion.tr
                                        className='resursTableRow'
                                        layout
                                        {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return (
                                                <motion.td

                                                    className={cell.column.Header === "Summa" ? 'resurssumma' : cell.column.Header === "Resurs" ? 'resursanlaggning' : "default"}
                                                    key={i}
                                                    initial={{ opacity: 0, y: "-50%" }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{
                                                        opacity: 0,
                                                        y: "-50%",
                                                        transition: { duration: 0.1 }
                                                    }}
                                                    transition={{
                                                        ease: "easeInOut",
                                                        duration: 0.1,
                                                        delay: cell.row.index * 0.1
                                                    }}

                                                    {...cell.getCellProps()}>{cell.render('Cell')}</motion.td>)
                                        })}
                                    </motion.tr>
                                )
                            })}
                        </AnimatePresence>
                    </tbody>
                </table>
            </>
        )
    }

    const columns = React.useMemo(
        () => [
            {
                // Build our expander column
                id: 'expander', // Make sure it has an ID
                Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
                    <span {...getToggleAllRowsExpandedProps()}>
                        {/* {isAllRowsExpanded ? <AiOutlineArrowDown></AiOutlineArrowDown> : <AiOutlineArrowRight></AiOutlineArrowRight>} */}
                    </span>
                ),
                Cell: ({ row }) =>
                    // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
                    // to build the toggle for expanding a row
                    row.canExpand ? (
                        <span
                            {...row.getToggleRowExpandedProps({
                                style: {
                                    // We can even use the row.depth property
                                    // and paddingLeft to indicate the depth
                                    // of the row
                                    paddingLeft: `${row.depth * 2}rem`,
                                    //  color: "#1B1B1B"
                                },
                            })}
                        >
                            {row.isExpanded ? <MdRemove></MdRemove> : <MdAdd></MdAdd>}
                        </span>
                    ) : null,
            },
            {
                Header: headerTextInformation,
                columns: [{ Header: 'Resurs', accessor: 'namn', }, ...dynamicColumns, { Header: "Summa", accessor: "summa" }],
            },
        ],
        []
    )

    return (
        <>
            <Table columns={columns} data={data} />
        </>
    )
}
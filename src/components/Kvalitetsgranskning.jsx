import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { getTeamsFromApi, getAnlaggningar, getSlaktvolymer, getBerakningsUnderlag, getAvvikelser } from "../services/Api";
import { Tables } from "./Tables";
import { ResursTables } from "./ResursTables";
import { SlaktvolymerTables } from "./SlaktvolymerTables";
import makeAnimated from 'react-select/animated';
import { MdOutlineSearch, MdOutlineRemoveRedEye, MdGroups2, MdFactory, MdOutlineInsertChartOutlined, MdErrorOutline, MdCalendarMonth, MdFilterAlt, MdOutlineInfo } from "react-icons/md";
import { SiMicrosoftexcel } from "react-icons/si";
import { GiCrosshair } from "react-icons/gi";
import { structureTableData } from "../utils/structureTableData";
import { structureTableResurserOnlyData } from "../utils/structureTableResurserOnlyData";
import { structureTableSlaktvolymerOnlyData } from "../utils/structureTableSlaktvolymerOnlyData";
import { structureTableAvvikelserOnlyData } from "../utils/structureTableAvvikelserOnlyData";
import { structure290And330TableData } from "../utils/structure290And330TableData";
import { AvvikelserTables } from "./AvvikelserTables";
import { Player } from '@lottiefiles/react-lottie-player';
import location from "../assets/location.json"
import rocket from "../assets/rocket.json"
import { Tables290And330 } from "./Tables290And330";
import { utils, writeFile } from "xlsx";
import "./kvalitetsgranskning.css";

export function Kvalitetsgranskning() {

    const animatedComponents = makeAnimated();
    const kontrollerToChooseFrom = [
        { label: "Kontrollera vid slakt", value: "Kontrollera vid slakt" },
        { label: "Livsmedelsföretagare, Slakt/VHA", value: "Livsmedelsföretagare, Slakt/VHA" },
        { label: "Livsmedelsföretagare, KLG", value: "Livsmedelsföretagare, KLG" },
        { label: "Godkännandekontroll", value: "Godkännandekontroll" },
        { label: "Exportkontroll", value: "Exportkontroll" },
        { label: "Materialkontroll", value: "Materialkontroll" }
    ]

    const [selectedOption, setSelectedOption] = useState(null);
    const [teams, setTeams] = useState([]);
    const [anlaggningar, setAnlaggningar] = useState([]);
    const [slaktvolymer, setSlaktvolymer] = useState([]);
    const [avvikelser, setAvvikelser] = useState([]);
    const [berakningsUnderlag, setBerakningsUnderlag] = useState([]);
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [startDateToShowInUI, setStartDateToShowInUI] = useState("")
    const [endDateToShowInUI, setEndDateToShowInUI] = useState("")
    const [initialLoading, setInitialLoading] = useState(false)
    const [toggleSearchContainer, setToggleSearchContainer] = useState(true)
    const [numberOfFetchesDone, setNumberOfFetchesDone] = useState(0)
    const [completeTableData, setCompleteTableData] = useState([]);
    const [tableColumns, setTableColumns] = useState([]);
    const [complete290And330TableData, setComplete290And330TableData] = useState([]);
    const [table290And330Columns, setTable290And330Columns] = useState([]);
    const [toggleBtnAnlaggningarWithFilter, setToggleBtnAnlaggningarWithFilter] = useState(false)
    const [aktiviteterToChooseFrom, setAktiviteterToChooseFrom] = useState([]);
    const [selectedKontroll, setSelectedKontroll] = useState(null);
    const [selectedAktivitet, setSelectedAktivitet] = useState([]);
    const [chosenView, setChosenView] = useState("default")
    const [completeResurserTableData, setCompleteResurserTableData] = useState([]);
    const [completeSlaktvolymerTableData, setCompleteSlaktvolymerTableData] = useState([]);
    const [completeAvvikelserTableData, setCompleteAvvikelserTableData] = useState([]);
    const [resurserTableColumns, setResurserTableColumns] = useState([]);
    const [resurserAktiviteterToChooseFrom, setResurserAktiviteterToChooseFrom] = useState([]);
    const [selectedResursAktivitet, setSelectedResursAktivitet] = useState([]);
    const [newFetchDone, setNewFetchDone] = useState(false)
    const [showInfo, setShowInfo] = useState(false)

    // vid mount fetchar data från services/api
    useEffect(() => {
        setInitialLoading(true)
        let data = getTeamsFromApi()
        setTeams([...data])
        setInitialLoading(false)

    }, [])

    useEffect(() => {
        // när alla fetch är klara och data är redo bearbetas kör nedan
        if (numberOfFetchesDone === 4) {
            structureTable(anlaggningar, berakningsUnderlag)
            structureTableForResurserOnly(anlaggningar, berakningsUnderlag)
            structureTableForSlaktvolymOnly(slaktvolymer)
            structureTableForAvvikelserOnly(avvikelser)
            structureTableFor290And330(anlaggningar, berakningsUnderlag)
        }
    }, [numberOfFetchesDone, toggleBtnAnlaggningarWithFilter])

    useEffect(() => {
        // om filter är tomt återställ full tabell igen
        if (selectedAktivitet.length === 0 && numberOfFetchesDone === 4) {
            structureTable(anlaggningar, berakningsUnderlag)
            return
        }
        handleAktivitetsFilter()
    }, [selectedAktivitet])

    useEffect(() => {
        // om filter är tomt återställ full tabell igen
        if (selectedKontroll === null && numberOfFetchesDone === 4) {
            structureTable(anlaggningar, berakningsUnderlag)
            return
        }
        handleAktivitetsKontrollerFilter()
    }, [selectedKontroll])

    useEffect(() => {
        // om filter är tomt återställ full tabell igen
        if (selectedResursAktivitet.length === 0 && numberOfFetchesDone === 4) {
            structureTableForResurserOnly(anlaggningar, berakningsUnderlag)
            return
        }
        handleResursAktivitetsFilter()
    }, [selectedResursAktivitet])

    useEffect(() => {
        // återställ/nolla filter när man växlar ny
        setSelectedAktivitet([])
        setSelectedResursAktivitet([])
    }, [chosenView])


    // fetcha all data från API
    function getChosenTeamInformation(team, startDate, endDate) {
         //dölj sökfält 
         setToggleSearchContainer(false)
         setNumberOfFetchesDone(0)
         setNewFetchDone(true)
 
         let start = startDate.toLocaleDateString("sv-SE",
             {
                 year: "numeric",
                 month: "2-digit",
                 day: "2-digit"
             })
 
         let end = endDate.toLocaleDateString("sv-SE",
             {
                 year: "numeric",
                 month: "2-digit",
                 day: "2-digit"
             })
 
         setStartDateToShowInUI(start)
         setEndDateToShowInUI(end)
 
 
         // console.log("anläggningar: " , res);
         let anlaggningarData = getAnlaggningar();
         setAnlaggningar([...anlaggningarData])
         setNumberOfFetchesDone((numberOfFetchesDone) => numberOfFetchesDone + 1);
 
         //console.log("slaktvolymer: " , res);
         let slaktvolymerData = getSlaktvolymer();
         setSlaktvolymer([...slaktvolymerData])
         setNumberOfFetchesDone((numberOfFetchesDone) => numberOfFetchesDone + 1);
 
         let avvikelserData = getAvvikelser();
         setAvvikelser([...avvikelserData])
         setNumberOfFetchesDone((numberOfFetchesDone) => numberOfFetchesDone + 1);
 
         // console.log("Bunderlag: " , res);
         let berakningsunderlagData =  getBerakningsUnderlag();
         setBerakningsUnderlag([...berakningsunderlagData])
         setNumberOfFetchesDone((numberOfFetchesDone) => numberOfFetchesDone + 1);

    }

    function handleSelectedWeek(firstDayOfWeek, weekNumber) {
        let lastDayOfWeek = addDays(firstDayOfWeek);
        let range = [firstDayOfWeek, lastDayOfWeek]
        setDateRange([...range])
    }

    function addDays(date) {
        var result = new Date(date);
        result.setDate(result.getDate() + 6);
        return result;
    }

    function handleCalendarClick(e) {
        if (e.target.className === "react-datepicker__current-month react-datepicker__current-month--hasYearDropdown") {
            let firstDayInMonth = new Date(e.target.innerText);
            let lastDayOfMonth = new Date(firstDayInMonth.getFullYear(), firstDayInMonth.getMonth() + 1, 0);
            getChosenTeamInformation(selectedOption, firstDayInMonth, lastDayOfMonth)
        }
    }

    function toggleHideEmptyAnlaggning() {
        setToggleBtnAnlaggningarWithFilter(!toggleBtnAnlaggningarWithFilter)
    }

    function handleAktivitetsFilter() {
        // deepCopy av data, viktigt!
        const filtreratUnderlag = structuredClone(berakningsUnderlag)
        // gå igenom och ta bort alla rapporter i anläggningen som inte matchar filter
        filtreratUnderlag.forEach(anl => {
            let aktList = selectedAktivitet.map((a) => {
                return a.label
            })
            let res = anl.tidrapporter.filter(rapport => aktList.includes(rapport.aktivitet));
            Object.assign(anl, { tidrapporter: [...res] })
        });
        // om anläggning efter ovan filtrering inte har några tidsrapporter så tar bort anläggningen från listan 
        let finalResultArray = filtreratUnderlag.filter(a => a.tidrapporter.length !== 0);
        structureTable(anlaggningar, finalResultArray)
    }

    function handleAktivitetsKontrollerFilter() {

        if (selectedKontroll) {

            const filtreratUnderlag = structuredClone(berakningsUnderlag)

            switch (selectedKontroll.label) {
                case "Kontrollera vid slakt":

                    filtreratUnderlag.forEach(anl => {
                        let aktList = [32008101]
                        let res = anl.tidrapporter.filter(rapport => aktList.includes(rapport.aktivitet));
                        Object.assign(anl, { tidrapporter: [...res] })
                    });
                    let finalResultArray = filtreratUnderlag.filter(a => a.tidrapporter.length !== 0);
                    structureTable(anlaggningar, finalResultArray)

                    break;
                case "Livsmedelsföretagare, Slakt/VHA":

                    filtreratUnderlag.forEach(anl => {
                        let ogiltigaKoder = [180, 181, 182]
                        let res = anl.tidrapporter.filter(rapport => rapport.aktivitet === 32008201 && !ogiltigaKoder.includes(rapport.arbetstypKod));
                        Object.assign(anl, { tidrapporter: [...res] })
                    });
                    let finalResultArray2 = filtreratUnderlag.filter(a => a.tidrapporter.length !== 0);
                    structureTable(anlaggningar, finalResultArray2)

                    break;
                case "Livsmedelsföretagare, KLG":

                    filtreratUnderlag.forEach(anl => {
                        let ogiltigaKoder = [180, 181, 182]
                        let res = anl.tidrapporter.filter(rapport => (rapport.aktivitet === 32008202 || rapport.aktivitet === 32008203) && !ogiltigaKoder.includes(rapport.arbetstypKod));
                        Object.assign(anl, { tidrapporter: [...res] })
                    });
                    let finalResultArray3 = filtreratUnderlag.filter(a => a.tidrapporter.length !== 0);
                    structureTable(anlaggningar, finalResultArray3)

                    break;
                case "Godkännandekontroll":

                    filtreratUnderlag.forEach(anl => {
                        let ogiltigaKoder = [180, 181, 182]
                        let res = anl.tidrapporter.filter(rapport => (rapport.aktivitet === 32008201 || rapport.aktivitet === 32008202 || rapport.aktivitet === 32008203) && !ogiltigaKoder.includes(rapport.arbetstypKod));
                        Object.assign(anl, { tidrapporter: [...res] })
                    });
                    let finalResultArray4 = filtreratUnderlag.filter(a => a.tidrapporter.length !== 0);
                    structureTable(anlaggningar, finalResultArray4)

                    break;
                case "Exportkontroll":

                    filtreratUnderlag.forEach(anl => {
                        let aktList = [32008601]
                        let res = anl.tidrapporter.filter(rapport => aktList.includes(rapport.aktivitet));
                        Object.assign(anl, { tidrapporter: [...res] })
                    });
                    let finalResultArray5 = filtreratUnderlag.filter(a => a.tidrapporter.length !== 0);
                    structureTable(anlaggningar, finalResultArray5)

                    break;
                case "Materialkontroll":

                    filtreratUnderlag.forEach(anl => {
                        let aktList = [32008204]
                        let res = anl.tidrapporter.filter(rapport => aktList.includes(rapport.aktivitet));
                        Object.assign(anl, { tidrapporter: [...res] })
                    });
                    let finalResultArray6 = filtreratUnderlag.filter(a => a.tidrapporter.length !== 0);
                    structureTable(anlaggningar, finalResultArray6)

                    break;
                default:
                    console.log("nada in switch");
            }
        }
        return
    }

    function handleResursAktivitetsFilter() {
        // deepCopy av data, viktigt!
        const filtreratUnderlag = structuredClone(berakningsUnderlag)
        // gå igenom och ta bort alla rapporter i anläggningen som inte matchar filter
        filtreratUnderlag.forEach(anl => {
            let aktList = selectedResursAktivitet.map((a) => {
                return a.label
            })
            let res = anl.tidrapporter.filter(rapport => aktList.includes(rapport.aktivitet));
            Object.assign(anl, { tidrapporter: [...res] })
        });
        // om anläggning efter ovan filtrering inte har några tidsrapporter så tar bort anläggningen från listan 
        let finalResultArray = filtreratUnderlag.filter(a => a.tidrapporter.length !== 0);
        structureTableForResurserOnly(anlaggningar, finalResultArray)
    }


    // strukturera och formatera komplett tabell
    function structureTable(anlaggningar, berakningsUnderlag) {
        console.log(anlaggningar);
        console.log(berakningsUnderlag);
        let returnedArray = structureTableData(anlaggningar, berakningsUnderlag)

        // visar per default inte anläggningar som är tomma på data
        if (!toggleBtnAnlaggningarWithFilter) {
            let tempArray = returnedArray[0]
            let anlaggningarFilteredWithoutEmptyStatus = tempArray.filter(row => row.status !== 'empty');
            setCompleteTableData([...anlaggningarFilteredWithoutEmptyStatus])
            setTableColumns([...returnedArray[1]])
            // beräkna bara om aktivitetsval till filter om ny data inkommit
            if (newFetchDone) {
                setAktiviteterToChooseFrom([...returnedArray[2]])
            }
            setNewFetchDone(false)
            return
        }
        // om togglad av användaren visa även anläggninga som är tomma på data
        setCompleteTableData([...returnedArray[0]])
        setTableColumns([...returnedArray[1]])
        if (newFetchDone) {
            setAktiviteterToChooseFrom([...returnedArray[2]])
        }
        setNewFetchDone(false)
    }

    function structureTableForResurserOnly(anlaggningar, berakningsUnderlag) {
        let returnedArray = structureTableResurserOnlyData(anlaggningar, berakningsUnderlag)
        setCompleteResurserTableData([...returnedArray[0]])
        setResurserTableColumns([...returnedArray[1]])
        if (newFetchDone) {
            setResurserAktiviteterToChooseFrom([...returnedArray[2]])
        }
        setNewFetchDone(false)
    }

    function structureTableForSlaktvolymOnly(slaktvolymer) {
        let returnedArray = structureTableSlaktvolymerOnlyData(slaktvolymer);
        setCompleteSlaktvolymerTableData([...returnedArray])
    }

    function structureTableForAvvikelserOnly(avvikelser) {
        let returnedArray = structureTableAvvikelserOnlyData(avvikelser, anlaggningar);
        setCompleteAvvikelserTableData([...returnedArray])
    }

    function structureTableFor290And330(anlaggningar, berakningsUnderlag) {
        let returnedArray = structure290And330TableData(anlaggningar, berakningsUnderlag)
        let tempArray = returnedArray[0]
        let anlaggningarFilteredWithoutEmptyStatus = tempArray.filter(row => row.status !== 'empty');
        setComplete290And330TableData([...anlaggningarFilteredWithoutEmptyStatus])
        setTable290And330Columns([...returnedArray[1]])

    }

    function exportExcel() {

        // skapa en lista med alla giltiga anläggningars id då API ger alla anläggningar som finns oavsett team
        let listaMedAnlaggningsIDn = anlaggningar.map((anlaggning) => {
            return anlaggning.id
        })

        // lista med allt beräkningsunderlag som matchar ovan id nummer
        let finalBerakningsUnderlag = berakningsUnderlag.filter(anl => listaMedAnlaggningsIDn.includes(anl.anläggningRecno));

        let allaRapporter = []

        finalBerakningsUnderlag.forEach((anl) => {

            anl.tidrapporter.forEach((rapport) => {

                anlaggningar.forEach((a) => {

                    if (a.id === anl.anläggningRecno) {
                        Object.assign(rapport, { AnläggningID: anl.anläggningRecno, Anläggning: a.namn });
                    }
                })

            })

            allaRapporter = [...allaRapporter, ...anl.tidrapporter]
        })

        let data = allaRapporter.map((rapport) => {

            let obj = {
                AnläggningID: rapport.AnläggningID,
                Anläggning: rapport.Anläggning,
                Tidkod: rapport.tidskod,
                Aktivitet: rapport.aktivitet,
                IntäktskategoriKod: rapport.intäktskategoriKod,
                AttestantID: rapport.attestantNamn,
                Resursnamn: rapport.resursIdText,
                Datum: rapport.transaktionsdatum,
                Arbetstyp: rapport.arbetstypKod,
                ArbetstypText: rapport.arbetstypKodText,
                Period: rapport.period,
                Kst: rapport.kostnatställe,
                Timmar: rapport.timmar,
                Attesterad: "Ej attesterad"
            }
            if (rapport.attesterad) {
                obj.Attesterad = "Attesterad"
            }
            return obj
        })

        let wb = utils.book_new(),
            ws = utils.json_to_sheet(data);
        utils.book_append_sheet(wb, ws, "Tidrapporter")
        writeFile(wb, "Kvalitetssäkring debiterbar tid.xlsx")
    }

    return (
        <motion.section
            key="kvalitetsgranskning"
            className="mainSection"
            exit={{
                opacity: 0, y: "-200%", transition: {
                    duration: 0.2,
                    ease: "easeInOut"
                }
            }}
            initial={{ opacity: 0, y: "-200%" }}
            animate={{
                opacity: 1, y: 0, transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                }
            }}>

            <section className="topContainer">
                <AnimatePresence mode="wait">

                    {initialLoading &&
                        <motion.div
                            key="loader"
                            exit={{
                                opacity: 0, x: "+300%", transition: {
                                    duration: 0.2,
                                    ease: "easeInOut"
                                }
                            }}
                            initial={{ opacity: 0, x: "-200%" }}
                            animate={{
                                opacity: 1, x: 0, transition: {
                                    duration: 0.3,
                                    ease: "easeInOut"
                                }
                            }}
                            className="loaderRocker">
                            <Player
                                autoplay
                                loop
                                src={rocket}
                            >
                            </Player>
                        </motion.div>
                    }

                    {!initialLoading && toggleSearchContainer &&
                        <motion.div
                            key="valcontainer"
                            exit={{
                                opacity: 0, y: "-200%", transition: {
                                    duration: 0.2,
                                    ease: "easeInOut"
                                }
                            }}
                            initial={{ opacity: 0, y: "-200%" }}
                            animate={{
                                opacity: 1, y: 0, transition: {
                                    duration: 0.3,
                                    ease: "easeInOut"
                                }
                            }}>

                            <section className="optionsContainer">
                                <div className="locationIcon">
                                    <Player
                                        autoplay
                                        loop
                                        src={location}
                                    >
                                    </Player>
                                </div>
                                <Select
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            width: "300px",

                                        }),
                                    }}
                                    theme={(theme) => ({
                                        ...theme,
                                        borderRadius: 5,
                                        colors: {
                                            ...theme.colors,
                                            primary25: '#f5620027',
                                            primary: '#F56200',
                                        },
                                    })}
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={teams}
                                    placeholder={"välj team"}
                                />

                            </section>
                            {selectedOption &&
                                <motion.div
                                    onClick={(e) => { handleCalendarClick(e) }}
                                    className="calendarContainer"
                                    key="kalender"
                                    exit={{
                                        opacity: 0, y: "-200%", transition: {
                                            duration: 0.2,
                                            ease: "easeInOut"
                                        }
                                    }}
                                    initial={{ opacity: 0, y: "-200%" }}
                                    animate={{
                                        opacity: 1, y: 0, transition: {
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        }
                                    }}
                                >

                                    <button onClick={() => { setShowInfo(!showInfo) }} className="informationBtn">
                                        <MdOutlineInfo></MdOutlineInfo>
                                    </button>
                                    <AnimatePresence>
                                        {showInfo &&
                                            <motion.ul
                                                key="infoList"
                                                exit={{
                                                    opacity: 0, y: "-200%", transition: {
                                                        duration: 0.2,
                                                        ease: "easeInOut"
                                                    }
                                                }}
                                                initial={{ opacity: 0, y: "-200%" }}
                                                animate={{
                                                    opacity: 1, y: 0, transition: {
                                                        duration: 0.3,
                                                        ease: "easeInOut"
                                                    }
                                                }}
                                                className="infoList">
                                                <li><strong>Välja månad?</strong> - Klicka direkt på månad överst i kalendern.</li>
                                                <li><strong>Välja vecka?</strong> - Klicka på en veckodag på önskad vecka och därefter på veckornummer på vänster sida.</li>
                                                <li><strong>Välja tidsspann?</strong> - Klicka på önskad startdatum och därefer på önskat slutdatum.</li>
                                                <li>Välj snabbt dagens datum genom att klicka på <strong>korshår</strong>.</li>
                                            </motion.ul>}
                                    </AnimatePresence>


                                    <DatePicker
                                        todayButton={<GiCrosshair></GiCrosshair>}
                                        // showMonthDropdown
                                        showYearDropdown
                                        scrollableYearDropdown={true}
                                        yearDropdownItemNumber={10}
                                        maxDate={new Date()}
                                        inline
                                        dateFormat="yyyy/MM/dd"
                                        showWeekNumbers
                                        selectsRange={true}
                                        startDate={startDate}
                                        endDate={endDate}
                                        onChange={(update) => {
                                            setDateRange(update);
                                        }}
                                        isClearable={true}
                                        calendarStartDay={1}
                                        onWeekSelect={(firstDayOfWeek, weekNumber, event) => { handleSelectedWeek(firstDayOfWeek, weekNumber) }}
                                    />

                                    <AnimatePresence mode="wait">
                                        {selectedOption && startDate && endDate &&
                                            <motion.button
                                                key="searchBtn"
                                                exit={{
                                                    opacity: 0, y: "-200%", transition: {
                                                        duration: 0.2,
                                                        ease: "easeInOut"
                                                    }
                                                }}
                                                initial={{ opacity: 0, y: "-200%" }}
                                                animate={{
                                                    opacity: 1, y: 0, transition: {
                                                        duration: 0.3,
                                                        ease: "easeInOut"
                                                    }
                                                }}
                                                className="searchBtn" onClick={() => { getChosenTeamInformation(selectedOption, startDate, endDate) }}><MdOutlineSearch></MdOutlineSearch></motion.button>
                                        }
                                    </AnimatePresence>
                                </motion.div>}
                        </motion.div>
                    }
                    {!toggleSearchContainer && numberOfFetchesDone === 4 &&
                        <motion.button
                            key="toggleBtn"
                            exit={{
                                opacity: 0, y: "-200%", rotate: 160, transition: {
                                    duration: 0.2,
                                    ease: "easeInOut"
                                }
                            }}
                            initial={{ opacity: 0, y: "-200%" }}
                            animate={{
                                opacity: 1, y: 0, transition: {
                                    duration: 0.3,
                                    ease: "easeInOut"
                                }
                            }}
                            className="toggleBtn" onClick={() => { setToggleSearchContainer(!toggleSearchContainer) }}><MdCalendarMonth></MdCalendarMonth></motion.button>
                    }
                </AnimatePresence>
            </section>

            <AnimatePresence mode="wait">
                {numberOfFetchesDone > 0 && numberOfFetchesDone < 4 &&
                    <section className="tableLoadingContainer">
                        <motion.div
                            key="loadingInfo"
                            exit={{
                                opacity: 0, transition: {
                                    duration: 0.3,
                                    ease: "easeInOut"
                                }
                            }}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1, transition: {
                                    duration: 0.3,
                                    ease: "easeInOut"
                                }
                            }}
                            className="information">Laddar {`${selectedOption.namn}: ${startDateToShowInUI} - ${endDateToShowInUI}`}</motion.div>
                        <motion.div
                            key="loader"
                            exit={{
                                opacity: 0, x: "+300%", transition: {
                                    duration: 0.2,
                                    ease: "easeInOut"
                                }
                            }}
                            initial={{ opacity: 0, x: "-200%" }}
                            animate={{
                                opacity: 1, x: 0, transition: {
                                    duration: 0.3,
                                    ease: "easeInOut"
                                }
                            }}
                            className="loaderRocker">
                            <Player
                                autoplay
                                loop
                                src={rocket}
                            >
                            </Player>
                        </motion.div>
                    </section>}

                {numberOfFetchesDone === 4 &&
                    <motion.section
                        layout
                        key="table"
                        exit={{
                            opacity: 0, y: "-200%", transition: {
                                duration: 0.2,
                                ease: "easeInOut"
                            }
                        }}
                        initial={{ opacity: 0, y: "-200%" }}
                        animate={{
                            opacity: 1, y: 0, transition: {
                                duration: 0.3,
                                ease: "easeInOut"
                            }
                        }}
                        className="tableContainer">

                        <section className="viewSelectionContainer">
                            <button className={chosenView === "default" ? 'activeBtn' : "anlaggningBtn"} onClick={() => { setChosenView("default") }}><span className="btnIcon"><MdFactory></MdFactory></span>anläggningar</button>
                            <button className={chosenView === "resurser" ? 'activeBtn' : "resurserBtn"} onClick={() => { setChosenView("resurser") }}><span className="btnIcon"><MdGroups2></MdGroups2></span>resurser</button>
                            <button className={chosenView === "slaktvolymer" ? 'activeBtn' : "slaktvolymBtn"} onClick={() => { setChosenView("slaktvolymer") }}><span className="btnIcon"><MdOutlineInsertChartOutlined></MdOutlineInsertChartOutlined></span>slaktvolymer</button>
                            <button className={chosenView === "avvikelser" ? 'activeBtn' : "avvikelserBtn"} onClick={() => { setChosenView("avvikelser") }}> <span className="btnIcon"> <MdErrorOutline></MdErrorOutline></span>avvikelser</button>
                            <button className={chosenView === "290/330" ? 'activeBtn' : "table290330Btn"} onClick={() => { setChosenView("290/330") }}><span className="btnIcon"><MdFilterAlt></MdFilterAlt></span>290/330</button>
                            <button className={chosenView === "excelexport" ? 'activeBtn' : "excelexportBtn"} onClick={() => { exportExcel() }}><span className="btnIcon"><SiMicrosoftexcel></SiMicrosoftexcel></span>excelexport</button>
                        </section>

                        <AnimatePresence mode="wait">
                            {chosenView === "default" &&
                                <motion.div
                                    key="defaultview"
                                    exit={{
                                        opacity: 0, y: "-200%", transition: {
                                            duration: 0.2,
                                            ease: "easeInOut"
                                        }
                                    }}
                                    initial={{ opacity: 0, y: "-200%" }}
                                    animate={{
                                        opacity: 1, y: 0, transition: {
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        }
                                    }}
                                >
                                    <div className="filtersContainer">
                                        <div className="filterElement">
                                            <Select
                                                isDisabled={selectedKontroll !== null}
                                                isClearable={!selectedKontroll}
                                                closeMenuOnSelect={false}
                                                components={animatedComponents}
                                                isMulti
                                                options={aktiviteterToChooseFrom}
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        width: "300px",
                                                        backgroundColor: "#fafafd",
                                                        color: "#F56200",
                                                        border: "1px solid #F56200"
                                                    }),
                                                }}
                                                placeholder={"filtrera tabell på aktivitet"}
                                                theme={(theme) => ({
                                                    ...theme,
                                                    borderRadius: 5,
                                                    colors: {
                                                        ...theme.colors,
                                                        primary25: '#f5620027',
                                                        primary: '#F56200',
                                                    },
                                                })}
                                                onChange={setSelectedAktivitet}
                                            />
                                        </div>

                                        <div className="filterElement">
                                            <Select
                                                isDisabled={selectedAktivitet.length !== 0}
                                                isClearable={true}
                                                options={kontrollerToChooseFrom}
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        width: "300px",
                                                        backgroundColor: "#fafafd",
                                                        color: "#F56200",
                                                        border: "1px solid #F56200"
                                                    }),
                                                }}
                                                placeholder={"filtrera tabell på kontrolltyp"}
                                                theme={(theme) => ({
                                                    ...theme,
                                                    borderRadius: 5,
                                                    colors: {
                                                        ...theme.colors,
                                                        primary25: '#f5620027',
                                                        primary: '#F56200',
                                                    },
                                                })}
                                                onChange={setSelectedKontroll}
                                            />
                                        </div>

                                        <div className="filterElement">
                                            <button
                                                className={!toggleBtnAnlaggningarWithFilter ? 'toggleBtnOff' : "toggleBtnOn"}
                                                onClick={toggleHideEmptyAnlaggning}><MdOutlineRemoveRedEye></MdOutlineRemoveRedEye>
                                            </button>
                                            <span>Dölj/Visa tomma anläggningar</span>
                                        </div>
                                    </div>

                                    <div>
                                        <Tables completeTableData={completeTableData} tableColumns={tableColumns} choice={selectedOption.namn} startDateToShowInUI={startDateToShowInUI} endDateToShowInUI={endDateToShowInUI}></Tables>
                                    </div>
                                </motion.div>
                            }

                            {chosenView === "resurser" &&
                                <motion.div
                                    key="resursview"
                                    exit={{
                                        opacity: 0, y: "+200%", transition: {
                                            duration: 0.2,
                                            ease: "easeInOut"
                                        }
                                    }}
                                    initial={{ opacity: 0, y: "+200%" }}
                                    animate={{
                                        opacity: 1, y: 0, transition: {
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        }
                                    }}
                                >
                                    <div className="filtersContainer">
                                        <div className="filterElement">
                                            <Select
                                                closeMenuOnSelect={false}
                                                components={animatedComponents}
                                                isMulti
                                                options={resurserAktiviteterToChooseFrom}
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        width: "300px",
                                                        backgroundColor: "#fafafd",
                                                        color: "#843E83",
                                                        border: "1px solid #843E83"
                                                    }),
                                                }}
                                                placeholder={"filtrera tabell på aktivitet"}
                                                theme={(theme) => ({
                                                    ...theme,
                                                    borderRadius: 5,
                                                    colors: {
                                                        ...theme.colors,
                                                        primary25: '#843e832f',
                                                        primary: '#843E83',
                                                    },
                                                })}
                                                onChange={setSelectedResursAktivitet}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <ResursTables completeTableData={completeResurserTableData} tableColumns={resurserTableColumns} choice={selectedOption.namn} startDateToShowInUI={startDateToShowInUI} endDateToShowInUI={endDateToShowInUI}></ResursTables>
                                    </div>
                                </motion.div>
                            }

                            {chosenView === "slaktvolymer" &&
                                <motion.div
                                    key="slaktvolymview"
                                    exit={{
                                        opacity: 0, x: "+200%", transition: {
                                            duration: 0.2,
                                            ease: "easeInOut"
                                        }
                                    }}
                                    initial={{ opacity: 0, x: "+200%" }}
                                    animate={{
                                        opacity: 1, x: 0, transition: {
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        }
                                    }}
                                >
                                    <div>
                                        <SlaktvolymerTables completeTableData={completeSlaktvolymerTableData} choice={selectedOption.namn} startDateToShowInUI={startDateToShowInUI} endDateToShowInUI={endDateToShowInUI}></SlaktvolymerTables>
                                    </div>
                                </motion.div>
                            }

                            {chosenView === "avvikelser" &&
                                <motion.div
                                    key="avvikelserview"
                                    exit={{
                                        opacity: 0, x: "-200%", transition: {
                                            duration: 0.2,
                                            ease: "easeInOut"
                                        }
                                    }}
                                    initial={{ opacity: 0, x: "-200%" }}
                                    animate={{
                                        opacity: 1, x: 0, transition: {
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        }
                                    }}
                                >
                                    <div>
                                        <AvvikelserTables completeTableData={completeAvvikelserTableData} choice={selectedOption.namn} startDateToShowInUI={startDateToShowInUI} endDateToShowInUI={endDateToShowInUI}></AvvikelserTables>
                                    </div>
                                </motion.div>
                            }

                            {chosenView === "290/330" &&
                                <motion.div
                                    key="290/330"
                                    exit={{
                                        opacity: 0, scale: 0, transition: {
                                            duration: 0.2,
                                            ease: "easeInOut"
                                        }
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                        opacity: 1, scale: 1, transition: {
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        }
                                    }}
                                >
                                    <div>
                                        <Tables290And330 complete290And330TableData={complete290And330TableData} table290And330Columns={table290And330Columns} choice={selectedOption.namn} startDateToShowInUI={startDateToShowInUI} endDateToShowInUI={endDateToShowInUI}></Tables290And330>
                                    </div>
                                </motion.div>
                            }
                        </AnimatePresence>
                    </motion.section>}
            </AnimatePresence>
        </motion.section>
    )
}
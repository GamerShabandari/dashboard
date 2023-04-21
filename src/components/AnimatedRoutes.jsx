import { Dashboard } from './Dashboard';
import { Kvalitetsgranskning } from './Kvalitetsgranskning';
import { NotFound } from './NotFound';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from "react-router-dom"
import { Route, Routes } from 'react-router-dom';

export default function AnimatedRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Dashboard></Dashboard>} />
                <Route path='/kvalitetsgranskning' element={<Kvalitetsgranskning></Kvalitetsgranskning>}> </Route>
                <Route path="/*" element={<NotFound></NotFound>} />
            </Routes>
        </AnimatePresence>
    )
}
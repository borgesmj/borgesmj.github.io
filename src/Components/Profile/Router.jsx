import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProfileNav from "./ProfileNav"
import CertificatesSection from "./CertificatesSection"
import DownloadsSection from "./DownloadsSection"
import StackSection from "./StackSection"
import WorkWithSection from "./WorkWithSection"

const Router = () => {
    return (
        <BrowserRouter>
            <ProfileNav/>
            <Routes>
                <Route path="/" element={<StackSection/>}></Route>
                <Route path="/files/" element={<DownloadsSection/>}></Route>
                <Route path="/certificates/" element={<CertificatesSection/>}></Route>
                <Route path="/work-together/" element={<WorkWithSection/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
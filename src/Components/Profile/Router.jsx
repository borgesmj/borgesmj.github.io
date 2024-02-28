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
            <div className="absolute top-[30rem] w-full pb-12 p-4  md:w-[60%] md:top-[32rem] lg:w-[45%] lg:top-[30rem] xl:top-[30rem] 2xl:top-[33rem] 2xl:w-2/5 lg:p-1 "> 
            <Routes>
                <Route path="/" element={<StackSection/>}></Route>
                <Route path="/files/" element={<DownloadsSection/>}></Route>
                <Route path="/certificates/" element={<CertificatesSection/>}></Route>
                <Route path="/work-together/" element={<WorkWithSection/>}></Route>
            </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Router
import {Routes, Route} from "react-router-dom"
import CareerTips from "./CareerTips"
import ErrorPage from "./ErrorPage"
import Home from "./Home"
import JobSearch from "./JobSearch"
import Login from "./Login"
import WorkFromHome from "./WFH"
import ArticleRead from "./ArticleRead"
import Employer from "./Employer"
import SearchedArticles from "./SearchedArticles"
import PaymentScreen from "../Components/Payment"
export default function AllRoutes () {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/work-from-home-jobs" element={<WorkFromHome />}/>
            <Route path="/search" element={<JobSearch/>}/>
            <Route path="/searched-articles" element={<SearchedArticles/>}/>
            <Route path="/employer" element={<Employer/>} />
            <Route path="/career-tips" element={<CareerTips/>}/>
            <Route path="/jobs/:id" element={<ArticleRead />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="*" element={<ErrorPage/>}/>
         </Routes>
    )

}
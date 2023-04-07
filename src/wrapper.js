import { useEffect, useState } from "react";
import { browserName } from "react-device-detect";
import { Route, Routes, useLocation } from "react-router-dom";
import { Charging } from "./components/charging";
import { ContactUs } from "./components/contact-us";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Mission } from "./components/mission";
import { News } from "./components/news";
import { NewsPage } from "./components/news/news-page";
import { NoMatchRoute } from "./components/no-match-route";
import { Price } from "./components/price";
import { Advertising } from "./components/Advertasing/Advertising";
import { Partners } from "./components/Partners/Partners";
import { Integration } from "./components/Partners/screens/Intergation/Integration";
import { Consalting } from "./components/Partners/screens/Consalting/Consalting";
import { WhiteLabel } from "./components/Partners/screens/WhiteLabel/WhiteLabel";
import { IndividualEntrepreneur } from "./components/IndividualEntrepreneur/IndividualEntrepreneur";
import { Shop247 } from "./components/Shop247/Shop247";

export const Wrapper = ({ location, innerWidth }) => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/news' element={<News innerWidth={innerWidth} />} />
                <Route path='/news/:id' element={<NewsPage {...location} innerWidth={innerWidth} />} />
                <Route path='/help' element={<Charging />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='/our-mission' element={<Mission />} />
                <Route path='/price' element={<Price innerWidth={innerWidth} />} />
                <Route path='/advertising' element={<Advertising />} />
                <Route path='/partners' element={<Partners />} />
                <Route path='/partners/integration' element={<Integration />} />
                <Route path='/partners/consalting' element={<Consalting />} />
                <Route path='/partners/white-label' element={<WhiteLabel />} />
                <Route path='/individual' element={<IndividualEntrepreneur />} />
                <Route path='/shop247' element={<Shop247 />} />
                <Route path='/*' element={<NoMatchRoute />} />
            </Routes>
            <Footer />
        </>
    )
}
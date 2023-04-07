import { useEffect, useState } from "react";
import { browserName } from "react-device-detect";
import { Route, Routes, useLocation } from "react-router-dom";
import { Charging } from "./components/charging";
import { ContactUs } from "./components/contact-us";
import { Main } from "./components/main";
import { Mission } from "./components/mission";
import { News } from "./components/news";
import { NewsPage } from "./components/news/news-page";
import { NoMatchRoute } from "./components/no-match-route";
import { Price } from "./components/price";
import { InternetExplorerPlug } from './components/ie-plug';
import { Wrapper } from "./wrapper";
import { Authorization } from "./components/admin/AuthForm/AuthForm";
import { AdminPanel } from "./components/admin/AdminPanel/AdminPanel";
import { AdminPagesList } from "./components/admin/AdminPagesList/AdminPagesList";
import { AdminPanelSite } from "./components/admin/AdminPanelSite/AdminPanelSite";
import { AdminSettings } from "./components/admin/AdminSettings/AdminSettings";

const App = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {

    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--device-height', `${vh}px`);

    window.addEventListener('resize', deviceSize);

    return () => window.removeEventListener('resize', deviceSize);
  }, [])

  const deviceSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--device-height', `${vh}px`);
    setInnerWidth(window.innerWidth);
  }

  return (
    <>
      {browserName !== 'Trident' &&
        <div className='wrapper'>
          <Routes>
            <Route path='*' element={<Wrapper location={location} innerWidth={innerWidth} />} />
            <Route path='/admin' exact element={<Authorization />} />
            <Route path='/admin/:login' element={<AdminPanel />}>
              <Route path='' element={<AdminPanelSite innerWidth={innerWidth} />}>
                <Route path='' element={<Main />} />
                <Route path='news' element={<News innerWidth={innerWidth} />} />
                <Route path='news/:id' element={<NewsPage {...location} innerWidth={innerWidth} />} />
                <Route path='help' element={<Charging />} />
                <Route path='contact-us' element={<ContactUs />} />
                <Route path='our-mission' element={<Mission />} />
                <Route path='price' element={<Price innerWidth={innerWidth} />} />
              </Route>
              <Route path='pages' element={<AdminPagesList />} />
              <Route path='settings' element={<AdminSettings />} />
              <Route path='*' element={<NoMatchRoute />} />
            </Route>
          </Routes>
        </div>
      }
      {browserName === 'Trident' &&
        <InternetExplorerPlug />
      }
    </>
  );
}

export default App;

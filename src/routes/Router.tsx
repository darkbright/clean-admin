import { Route, Routes } from 'react-router-dom';
// import { menu } from '../data/constants/menu';
// import Login from '../pages/auth/Login';
// import RequireAuth from './RequireAuth';

import LandingLayout from '../layouts/LandingLayout';
import BaseLayout from '../layouts/BaseLayout';

import Landing from '../pages/Landing';
import NotFound from '../pages/404';
import Unauthorized from '../pages/Unauthorized';
import Main from '../pages/Main';



function Router() {
  return (
    <Routes>
      {/* public route - no auth required */}
      <Route path="/" element={<LandingLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* <Route path="/auth/login" element={<Login />} /> */}
      </Route>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/main" element={<Main />} />
      </Route>

      {/* protected route - require auth and specific pageIds */}
      {/* <Route element={<RequireAuth allowedGroups={['test1']} />}>
        <Route element={<BaseLayout />}>
          <Route path="/index" element={<Main />} />
          {menu.map((route) =>
            route.subMenu?.map((subRoute) => (
              <Route
                key={subRoute.id}
                path={`/${route.id}/${subRoute.id}`}
                element={<subRoute.element />}
              />
            )),
          )}
        </Route>
      </Route> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;

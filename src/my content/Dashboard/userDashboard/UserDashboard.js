import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import "../../css/vertical-layout-light/style.css";
const Header = React.lazy(() => import("./mainHeader/userHeader"));
const SideBar = React.lazy(() => import("./mainHeader/sidebar"));
function UserDashoard() {
  return (
    <div>
      <Suspense fallback={<>.....</>}>
        <Header />
      </Suspense>
      <Suspense>
        <div className="container-fluid page-body-wrapper">
          <SideBar />
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
}
export default UserDashoard;

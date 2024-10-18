import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import UserTemplate from "../template/UserTemplate/UserTemplate";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import { path } from "../common/path";
import LoginPage from "../pages/LoginPage/LoginPage";
// import ListJobPage from '../pages/ListJobPage/ListJobPage'
const ListJobPage = React.lazy(() =>
  import("../pages/ListJobPage/ListJobPage")
);
import WrapperSuggestJob from "../components/Wrapper/WrapperSuggestJob";
import AdminTemplate from "../template/AdminTemplate/AdminTemplate";
// import AdminLogin from '../pages/AdminLogin/AdminLogin'
const AdminLogin = React.lazy(() => import("../pages/AdminLogin/AdminLogin"));
import { Skeleton } from "antd";
import CreateUser from "../pages/CreateUser/CreateUser";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import InfoUserPage from "../pages/InfoUserPage/InfoUserPage";
import StudentTemplate from "../template/StudentTemplate/StudentTemplate";
import InfoUser from "../components/InfoUser/InfoUser";
import MyLesson from "../components/MyLesson/MyLesson";
// import ManagerUser from '../pages/ManagerUser/ManagerUser'
const ManagerUser = React.lazy(() =>
  import("./../pages/ManagerUser/ManagerUser")
);

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: path.homePage,
      element: <UserTemplate />,
      children: [
        {
          path: path.listJob,
          element: (
            <Suspense fallback={<Skeleton />}>
              <ListJobPage />
            </Suspense>
          ),
        },
      ],
    },

    {
      path: path.student,
      element: <StudentTemplate />,
      children: [
        {
          path: path.inFoUser,
          element: (
            <Suspense fallback={<Skeleton />}>
              <InfoUser />
            </Suspense>
          ),
        },
        {
          path: path.myLesson,
          element: (
            <Suspense fallback={<Skeleton />}>
              <MyLesson />
            </Suspense>
          ),
        },
      ],
    },

    // {
    //   path: path.inFoUser,
    //   element: (
    //     <Suspense fallback={<Skeleton />}>
    //       <InfoUserPage />
    //     </Suspense>
    //   ),
    // },

    {
      path: path.pageNotFound,
      element: <PageNotFound />,
    },
    // {
    //   path: path.signIn,
    //   element: <LoginPage />,
    // },
    // {
    //   path: path.register,
    //   element: <RegisterPage />,
    // },
    {
      path: path.admin,
      element: <AdminTemplate />,
      children: [
        {
          path: path.managerUser,
          // index: true,
          element: (
            <Suspense fallback={<Skeleton />}>
              <ManagerUser />
            </Suspense>
          ),
        },
        {
          path: path.createUser,
          element: <CreateUser />,
        },
      ],
    },
    {
      path: path.adminLogIn,
      element: (
        <Suspense fallback={<Skeleton />}>
          <AdminLogin />
        </Suspense>
      ),
    },
    {
      path: path.logIn,
      element: (
        <Suspense fallback={<Skeleton />}>
          <LoginPage />
        </Suspense>
      ),
    },
    {
      path: path.signUp,
      element: (
        <Suspense fallback={<Skeleton />}>
          <RegisterPage />
        </Suspense>
      ),
    },
  ]);
  return routes;
};

export default useRoutesCustom;

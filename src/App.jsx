import { lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, PrivateRoute, RestrictedRoute } from 'layout';
import { routes } from './utils/routes';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Loader } from 'components';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const TodosPage = lazy(() => import('./pages/TodosPage/TodosPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path={routes.REGISTER}
          element={
            <RestrictedRoute
              redirectTo={routes.TODOS_REDIRECT}
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path={routes.LOGIN}
          element={
            <RestrictedRoute
              redirectTo={routes.TODOS_REDIRECT}
              component={<LoginPage />}
            />
          }
        />
        <Route
          path={routes.TODOS}
          element={
            <PrivateRoute
              redirectTo={routes.LOGIN_REDIRECT}
              component={<TodosPage />}
            />
          }
        />
        <Route
          path={routes.NOT_FOUND}
          element={<Navigate to={routes.HOME} />}
        />
      </Route>
    </Routes>
  );
};

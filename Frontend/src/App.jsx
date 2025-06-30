import { Routes, Route, Navigate } from "react-router";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading/Loading";
import ProtectedRoute from "./components/ProtectedRoute";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const TasksPage = lazy(() => import("./pages/TasksPage/TasksPage"));
const SignupPage = lazy(() => import("./pages/SignupPage/SignupPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage/DashboardPage"));
const CategoriesPage = lazy(() =>
  import("./pages/CategoriesPage/CategoriesPage")
);
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/tasks" element={<TasksPage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/categories" element={<CategoriesPage />} />
          </Route>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

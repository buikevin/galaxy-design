import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { LoginPage } from './pages/LoginPage';
import { DashboardLayout } from './layouts/DashboardLayout';
import { DashboardHome } from './pages/DashboardHome';
import { FormsPage } from './pages/FormsPage';
import { DataPage } from './pages/DataPage';
import { FeedbackPage } from './pages/FeedbackPage';
import { NavigationPage } from './pages/NavigationPage';
import { LayoutPage } from './pages/LayoutPage';
import { Toaster } from '@/components/ui/toast';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="forms" element={<FormsPage />} />
            <Route path="data" element={<DataPage />} />
            <Route path="feedback" element={<FeedbackPage />} />
            <Route path="navigation" element={<NavigationPage />} />
            <Route path="layout" element={<LayoutPage />} />
          </Route>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

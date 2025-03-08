import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Auth";
import ProtectedRoute from "./Protect";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Events from "./components/Events";
import FiberPage from "./components/Fiber";
import Reports from "./components/Reports";
import Operators from "./components/Operators";
import Options from "./components/Options";
import Map from "./components/Map";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
           <Route path="/map" element={
            <ProtectedRoute>
              <Map />
            </ProtectedRoute>
          }/>
           <Route path="/fiber" element={
            <ProtectedRoute>
              <FiberPage />
            </ProtectedRoute>
          }/>
          <Route path="/operators" element={
            <ProtectedRoute>
              <Operators />
            </ProtectedRoute>
          }/>
          <Route path="/events" element={
            <ProtectedRoute>
              <Events />
            </ProtectedRoute>
          }/>
          <Route path="/reports" element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }/>
          <Route path="/options" element={
            <ProtectedRoute>
              <Options />
            </ProtectedRoute>
          }/>
          
          <Route path="*" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

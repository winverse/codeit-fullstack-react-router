import { Routes, Route, Navigate } from 'react-router';
import { HomePage } from './pages/Home';
import { ProfilePage } from './pages/Profile';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

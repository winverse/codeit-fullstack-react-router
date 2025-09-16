import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';
import { CommunityPage } from './pages/Community';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<HomePage />} />
        <Route path="community" element={<CommunityPage />} />
      </Route>
    </Routes>
  );
}

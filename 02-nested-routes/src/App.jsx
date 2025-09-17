import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';
import { CommunityPage } from './pages/Community';
import { CommunityHomePage } from './pages/CommunityHome';
import { NewPostPage } from './pages/NewPost';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<HomePage />} />
        <Route path="community" element={<CommunityPage />}>
          <Route index={true} element={<CommunityHomePage />} />
          <Route path="/community/new-post" element={<NewPostPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

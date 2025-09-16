import { Routes, Route, Navigate } from 'react-router';
import { PostListPage } from './pages/PostList';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" replace />} />
      <Route path="/posts" element={<PostListPage />} />
    </Routes>
  );
}

import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/posts" element={<App />} />
      <Route path="/post/:postId" element={<App />} />
    </Routes>
  </BrowserRouter>,
)

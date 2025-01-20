import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import Posts from '@/views/posts/Posts'
import Post from '@/views/post/Post'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
    </BrowserRouter>,
  </QueryClientProvider>
)

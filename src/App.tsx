import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import HomePage from './components/pages/HomePage';
import NotFoundPage from './components/pages/NotFound';

const queryClient = new QueryClient()


function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </QueryClientProvider>

    </BrowserRouter>
  );
}

export default App;

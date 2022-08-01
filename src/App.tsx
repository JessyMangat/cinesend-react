import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import NotFoundPage from './components/pages/NotFoundPage';
import PlanetsPage from './components/pages/PlanetsPage';
import PeoplePage from './components/pages/PeoplePage';
import StarshipsPage from './components/pages/StarshipsPage';
import DetailsPage from './components/pages/DetailsPage';

const queryClient = new QueryClient()


function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/starships' element={<StarshipsPage />} />
          <Route path='/planets' element={<PlanetsPage />} />
          <Route path='/people' element={<PeoplePage />} />
          <Route path='/:table/:id' element={<DetailsPage />} />

          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </QueryClientProvider>

    </BrowserRouter>
  );
}

export default App;

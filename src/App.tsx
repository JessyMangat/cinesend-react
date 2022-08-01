import React from 'react';
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import NotFoundPage from './components/pages/NotFoundPage';
import PlanetsPage from './components/pages/PlanetsPage';
import PeoplePage from './components/pages/PeoplePage';
import StarshipsPage from './components/pages/StarshipsPage';
import DetailsPage from './components/pages/DetailsPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
})

const persister = createSyncStoragePersister({
  storage: window.localStorage,
})


function App() {
  return (
    <BrowserRouter>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/starships' element={<StarshipsPage />} />
          <Route path='/planets' element={<PlanetsPage />} />
          <Route path='/people' element={<PeoplePage />} />
          <Route path='/:table/:id' element={<DetailsPage />} />

          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </PersistQueryClientProvider>

    </BrowserRouter>
  );
}

export default App;

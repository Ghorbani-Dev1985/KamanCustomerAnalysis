'use client';
import { DatesProvider } from '@/context/DatesContext';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import React, { ReactNode, useState } from 'react';


const ReactQueryProvider = ({ children } : {children : ReactNode}) => {
  // State
  const [queryClientStore] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        refetchOnReconnect: true,
      },
    }
  }));
  // Return Provider
  return (
    <QueryClientProvider client={queryClientStore}>
      <DatesProvider>
      {children}
      </DatesProvider>
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
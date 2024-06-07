import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import type { FC } from "react";

import router from "@app/router";

import "normalize.css";
import "./theme";

const App: FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;

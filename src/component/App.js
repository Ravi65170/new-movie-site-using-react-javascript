import React from "react";
import Home from "./Home";
import Error from "./Error";
import SingleMovies from "./SingleMovie";
import { Routes, Route } from "react-router-dom";

import { AppProvider } from "./context";

const App = () => {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<SingleMovies />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AppProvider>
    </>
  );
};

export default App;

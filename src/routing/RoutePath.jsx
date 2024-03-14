import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  DetailPage,
  HomePage,
  NotFoundPage,
  SavedPage,
  SearchPage,
} from "../pages";
import { AnimatePresence } from "framer-motion";
const RoutePath = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/search/:searchedWords"} element={<SearchPage />} />
        <Route path={"/saved"} element={<SavedPage />} />
        <Route path={"/detail/:id"} element={<DetailPage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutePath;

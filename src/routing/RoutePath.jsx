import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  DetailPage,
  HomePage,
  NotFoundPage,
  SavedPage,
  SearchPage,
} from "../pages";

const RoutePath = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/search/:id"} element={<SearchPage />} />
        <Route path={"/saved"} element={<SavedPage />} />
        <Route path={"/detail/:id"} element={<DetailPage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default RoutePath;

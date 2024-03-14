import React from "react";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import { HeaderCard } from "../components/HeaderCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { db } from "../db/mock";

const HomePage = () => {
  const { BlogHeader: headers } = db;

  const nav = useNavigate();

  let modifiedHeaders = headers.map((i) => {
    let modifiedTitle = i.BlogTitle.replace(/\[|\]|\s/g, "");
    return { ...i, BlogTitle: modifiedTitle };
  });
  const handleClickHeaderCard = (BlogId, alphabet) => {
    nav(`/detail/${BlogId}`, { state: { alphabet } });
  };
  return (
    <motion.div
      className=" relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className=" absolute w-full top-0 -z-20 h-screen bg-gradient-to-br from-purple-400 to-60% dark:from-purple-950"></div>
      <Navbar />
      <div className="container mx-auto px-0">
        <div className=" my-10 sm:my-20">
          <SearchBar />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 mx-3 sm:mx-0 mb-10">
          {modifiedHeaders?.map((i) => (
            <div
              key={i.BlogId}
              className=" flex-grow sm:flex-grow-0"
              onClick={() => handleClickHeaderCard(i.BlogId, i.BlogTitle[0])}
            >
              <HeaderCard
                headerAlphabet={i.BlogTitle[0]}
                header={i.BlogTitle}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;

import React from "react";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import { useGetBlogHeaderQuery } from "../store/ApiServices/endpoints/blogHeader.endpoint";
import { HeaderCard } from "../components/HeaderCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const {
    data: headers,
    isLoading,
    isError,
    isSuccess,
  } = useGetBlogHeaderQuery();
  const nav = useNavigate();
  if (isLoading) {
    return "loading";
  }
  if (isError) {
    return "error fetching data";
  }
  if (isSuccess) {
    let modifiedHeaders = headers.map((i) => {
      let modifiedTitle = i.BlogTitle.replace(/\[|\]|\s/g, "");
      return { ...i, BlogTitle: modifiedTitle };
    });
    const handleClickHeaderCard = (BlogId) => {
      nav(`/detail/${BlogId}`);
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
        <div className=" my-20 sm:my-20">
          <SearchBar />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 mx-3 sm:mx-0 mb-10">
          {modifiedHeaders?.map((i) => (
            <div
              key={i.BlogId}
              className=" flex-grow sm:flex-grow-0"
              onClick={() => handleClickHeaderCard(i.BlogId)}
            >
              <HeaderCard
                headerAlphabet={i.BlogTitle[0]}
                header={i.BlogTitle}
              />
            </div>
          ))}
        </div>
      </motion.div>
    );
  }
};

export default HomePage;

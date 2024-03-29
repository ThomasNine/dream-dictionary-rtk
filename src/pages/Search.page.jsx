import React from "react";
import { useGetBlogDetailQuery } from "../store/ApiServices/endpoints/blogDetail.endpoint";
import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "../components/ui/button";
import AnswerTable from "../components/AnswerTable";
import { db } from "../db/mock";

const SearchPage = () => {
  const { BlogDetail: data } = db;
  const { searchedWords } = useParams();
  const nav = useNavigate();

  let filteredData = data.filter((i) => i.BlogContent.includes(searchedWords));
  const handleGoBack = () => {
    nav(-1);
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
        <div className=" flex justify-between items-center my-3 sm:px-3 px-5">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to={"/"}>မူလ</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <button disabled>{searchedWords}</button>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Button variant="ghost" className=" space-x-1" onClick={handleGoBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <span className=" text-xs"> နောက်သို့</span>
          </Button>
        </div>
        <AnswerTable answers={filteredData} />
      </div>
    </motion.div>
  );
};

export default SearchPage;

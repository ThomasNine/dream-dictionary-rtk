import React from "react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      className="  shadow shadow-purple-500"
    >
      <div className="container mx-auto px-2 sm:px-8 h-16 flex justify-between items-center">
        <div className=" flex-grow sm:text-center sm:ms-6 font-black text-lg ">
          <Link to={"/"}>အိပ်မက်အဘိဓာန်</Link>
        </div>

        <div className=" space-x-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to={"/saved"}>
                  <Button variant="ghost" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                      />
                    </svg>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Saved</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

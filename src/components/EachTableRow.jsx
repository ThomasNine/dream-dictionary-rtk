import React, { useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import {
  useCreateSavedMutation,
  useDeleteSavedMutation,
  useGetSavedQuery,
} from "../store/ApiServices/endpoints/saved.endpoint";
import { ConfirmModal } from "./ConfirmModal";
import { useSelector, useDispatch } from "react-redux";
import { addFav, removeFav } from "../store/GlobalStates/SavedSlice";

const EachTableRow = ({ answer, indexOfAnswer }) => {
  const { saved } = useSelector((state) => state.saved);
  const dispatch = useDispatch();

  const { toast } = useToast();

  const handleAddFav = (data) => {
    dispatch(addFav(data));
    toast({
      description: "သိမ်းဆည်းမှု အောင်မြင်ပါသည်",
      className: " bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] ",
    });
  };
  const handleRemoveFav = (data) => {
    console.log(data);
    dispatch(removeFav(data));
    toast({
      description: "ဖယ်ထုတ်မှု အောင်မြင်ပါသည်",
      className: " bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] ",
    });
  };
  return (
    <TableRow className="group">
      <TableCell className=" text-base py-5 text-center w-[30px] sm:w-[50px]">
        {indexOfAnswer + 1}
      </TableCell>
      <TableCell className=" text-base py-5">
        <div className="flex justify-between items-center">
          <p className=" w-11/12">{answer.BlogContent}</p>
          {saved.some(
            (eachSaved) => eachSaved.BlogContent === answer.BlogContent
          ) ? (
            <ConfirmModal handleRemoveFav={handleRemoveFav} answer={answer} />
          ) : (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => handleAddFav(answer)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </Button>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default EachTableRow;

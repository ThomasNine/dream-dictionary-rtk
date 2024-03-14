import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import {
  useCreateSavedMutation,
  useDeleteSavedMutation,
  useGetSavedQuery,
} from "../store/ApiServices/endpoints/saved.endpoint";
import { ConfirmModal } from "./ConfirmModal";

const EachTableRow = ({ answer, indexOfAnswer }) => {
  const { data: saved, isError, isSuccess, isLoading } = useGetSavedQuery();
  const [
    createSaved,
    { isLoading: createSaveLoading, error: createSavedError },
  ] = useCreateSavedMutation();
  const [deleteSaved, { isLoading: deleteSavedLoading }] =
    useDeleteSavedMutation();
  const { toast } = useToast();

  if (isLoading) {
    return (
      <tr>
        <td>loading</td>
      </tr>
    );
  }
  if (isError) {
    return (
      <tr>
        <td>error fetching saved data</td>
      </tr>
    );
  }
  if (isSuccess) {
    const handleAddFav = async (data) => {
      try {
        await createSaved(data);
        toast({
          description: "သိမ်းဆည်းမှု အောင်မြင်ပါသည်",
          className: " bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] ",
        });
      } catch (error) {}
    };
    const handleRemoveFav = async (data) => {
      try {
        await deleteSaved(data.id);
        toast({
          description: "ဖယ်ထုတ်မှု အောင်မြင်ပါသည်",
          className: " bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] ",
        });
      } catch (error) {}
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
              <ConfirmModal
                deleteSavedLoading={deleteSavedLoading}
                handleRemoveFav={handleRemoveFav}
                answer={answer}
              />
            ) : (
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleAddFav(answer)}
                disabled={createSaveLoading}
              >
                {createSaveLoading ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w- h-5 animate-spin"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
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
                )}
              </Button>
            )}
          </div>
        </TableCell>
      </TableRow>
    );
  }
};

export default EachTableRow;

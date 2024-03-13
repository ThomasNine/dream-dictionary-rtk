import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center mx-3 ">
      <Command className=" w-full sm:w-2/3 lg:w-1/2 border shadow-md  shadow-purple-800 hover:shadow-lg hover:shadow-purple-600 transition duration-300">
        <CommandInput
          className=" py-7"
          placeholder="Type a command or search..."
        />
        <CommandList className="hidden">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default SearchBar;

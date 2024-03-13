import * as React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function HeaderCard({ headerAlphabet, header }) {
  return (
    <Card className=" sm:w-[300px] md:w-[350px] hover:shadow  hover:shadow-purple-600 hover:bg-slate-900 transition duration-300 group ">
      <CardHeader>
        <CardTitle className=" text-2xl text-center">
          {headerAlphabet}
        </CardTitle>
        <CardDescription className="text-center">{header}</CardDescription>
      </CardHeader>
    </Card>
  );
}

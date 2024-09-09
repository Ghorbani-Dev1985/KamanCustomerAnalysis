import Image from "next/image";
import React from "react";

export const dynamic = "force-dynamic";
import LoginRegister from "./_components/LoginRegister";

const HomePage = ({
  searchParams,
}: {
  searchParams: Record<string, any>;
}) => {


  return (

     <LoginRegister />
  );
};

export default HomePage;

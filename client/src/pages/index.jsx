import React from "react";
import PetsList from "../components/PetsList";
import PetsForm from "../components/PetsForm";

export default function PetsPage() {
  return (
    <>
      <PetsForm />
      <PetsList />
    </>
  );
}

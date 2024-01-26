import React from 'react';
import FullPageHeader from "../../components/fullpageHeader";
import CharacteristicsMain from "../../components/characteristicsMain";
import './styles.css'
import PetsList from '../../components/PetsList';

export default function CharacteristicsPage() {

  return (
    <div className='characteristicsPage'>
      <FullPageHeader />
      <CharacteristicsMain />
      <PetsList/>
    </div>
  );
}

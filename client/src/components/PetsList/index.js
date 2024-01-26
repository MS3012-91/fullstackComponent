import React, { useEffect } from "react";
import {connect} from "react-redux";
import {getPetsThunk, deletePetThunk} from "../../store/slices/petsSlice";

function PetsList({ error, isFetching, pets, getPets, deletePet }) {
  useEffect(() => {
    getPets();
  }, []);

  const mapPets = (p) => {
    return (
      <li key={p.id}>
        <h2> {p.id} </h2>
        <h2> {p.name} </h2>
        <h3> {p.breed} </h3>
        <h3> {p.color} </h3>
        <h3> {p.weight} </h3>
        <h3> {p.gender} </h3>
        <div>
          <img src={p.image} />
        </div>
        <button onClick={() => deletePet(p.id)}> Delete </button>
      </li>
    );
  };

  return (
    <>
      {error && <div> ERROR </div>}
      {isFetching && <div> Loading... </div>}
      {!error && !isFetching && <ul>{pets.map(mapPets)}</ul>}
    </>
  );
}

const mapStateToProps = state => state.petsData;
const mapDispatchToProps = dispatch => {
  return {
    getPets: () => dispatch(getPetsThunk()),
    deletePet: (id) => dispatch(deletePetThunk(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PetsList);

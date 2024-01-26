import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const petsSliceName = "pets";

const httpClient = axios.create({
  baseURL: "http://localhost:5001/api",
});

const initialState = {
  pets: [],
  isFetching: false,
  error: null,
};

export const createPetThunk = createAsyncThunk(
  `/${petsSliceName}/create`,
  async (payload, { rejectWithValue }) => {
    console.log("payload", payload);
    try {
      // const createdPet = {
      //   data: { data: createdPet },
      // }
      const response = await httpClient.post("/pets", payload);
       const createdPet = response.data;
      return createdPet;
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  }
);

export const getPetsThunk = createAsyncThunk(
  `/${petsSliceName}/get`,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await httpClient.get("/pets");
      return response.data; //=> action.payload
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  }
);

export const deletePetThunk = createAsyncThunk(
  `/${petsSliceName}/delete`,
  async (payload, { rejectWithValue }) => {
    try {
      await httpClient.delete(`/pets/${payload}`);

      return payload; //=> action.payload
    } catch (err) {
      return rejectWithValue({ message: err.message });
    }
  }
);

const petsSlice = createSlice({
  name: `${petsSliceName}`,
  initialState,
  extraReducers: (builder) => {
    //Post
    builder.addCase(createPetThunk.pending, (state, action) => {
      state.isFetching = true;
      state.error= false;
    });
    builder.addCase(createPetThunk.fulfilled, (state, action) => {
      state.isFetching = false;
      state.pets = state.pets.push(action.payload.data);
    });
    builder.addCase(createPetThunk.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload; 
    })
//get
    builder.addCase(getPetsThunk.pending, (state, action) => {
      state.isFetching = true;
      state.error = false;
    });
    builder.addCase(getPetsThunk.fulfilled, (state, action) => {
      state.isFetching = false;
      state.pets = [...action.payload];
    });
    builder.addCase(getPetsThunk.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
    builder.addCase(deletePetThunk.pending, (state, action) => {
      state.isFetching = true;
      state.error = false;
    });
    builder.addCase(deletePetThunk.fulfilled, (state, action) => {
      const deletedPetIndex = state.pets.findIndex(
        (p) => p.id == action.payload
      );
      state.isFetching = false;
      state.pets.splice(deletedPetIndex, 1);
    });
    builder.addCase(deletePetThunk.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
  },
});

export default petsSlice.reducer;

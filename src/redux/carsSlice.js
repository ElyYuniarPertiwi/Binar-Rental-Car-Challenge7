import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { dataCars } from "../helper";

export const FILTERED_CARS = "FILTERED_CARS"
const CARS_URL =
  "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json";

const initialState = {cars: [], status: "idle", error: null,};

export const fetchCars = createAsyncThunk("cars/fetchCars", async (filter) => {
  try {
    let response = await axios.get(CARS_URL);
    response = await dataCars(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const getFilteredCar = (param) => {
  const { reset } = param

  if (reset) {
      return (dispatch) => {
          dispatch({
              type: FILTERED_CARS,
              payload: {
                  loading: false,
                  data: false,
                  errorMessage: false
              }
          })
      }
  }

  return (dispatch) => {
      dispatch({
          type: FILTERED_CARS,
          payload: {
              loading: true,
              data: false,
              errorMessage: false
          }
      })

      axios({
          method: 'GET',
          url: 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json',
          timeout: 120000
      })
          .then((response) => {
              const { driver, date, capacity } = param
              
              const filter = response.data.data.filter((car) => car.available === driver && car.capacity >= capacity && (new Date(car.availableAt) <= date))
              
              dispatch({
                  type: FILTERED_CARS,
                  payload: {
                      loading: false,
                      data: filter,
                      errorMessage: false
                  }
              })
          })
          .catch((err) => {
              dispatch({
                  type: FILTERED_CARS,
                  payload: {
                      loading: false,
                      data: false,
                      errorMessage: err.message
                  }
              })
          })
  }
}

const carsSlice = createSlice({ name: "cars", initialState, reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = "succeeded";
        let loadedCars = action.payload;
        state.cars = loadedCars;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllCars = (state) => state.cars.cars;
export const getCarsStatus = (state) => state.cars.status;
export const getCarsError = (state) => state.cars.error;

export default carsSlice.reducer;
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import apiService from "../../services/apiService";
import { DateType } from "../../pages/main-page";
import { AxiosError } from "axios";
import { ApiResponse, EventsType } from "../../features/main-page/type/type";

export const fetchOnThisDayEvents = createAsyncThunk(
  "wikipedia/fetchOnThisDayEvents",
  async ({ month, day }: DateType, { rejectWithValue }) => {
    try {
      const response = await apiService.get<ApiResponse>(
        `/feed/onthisday/events/${month}/${day}`,
      );
      return response.data.events;
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.response?.data || "An error occurred");
    }
  },
);

interface WikipediaState {
  events: Array<EventsType>;
  loading: boolean;
  error: null | string;
}

const initialState: WikipediaState = {
  events: [],
  loading: false,
  error: null,
};

const wikipediaSlice = createSlice({
  name: "wikipedia",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOnThisDayEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchOnThisDayEvents.fulfilled,
        (state, action: PayloadAction<Array<EventsType>>) => {
          state.loading = false;
          state.events = action.payload;
        },
      )
      .addCase(fetchOnThisDayEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default wikipediaSlice.reducer;

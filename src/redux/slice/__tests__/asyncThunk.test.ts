import { configureStore } from "@reduxjs/toolkit";
import { AxiosResponse, AxiosError } from "axios";
import { fetchOnThisDayEvents } from "../wikipedia-slice";
import wikipediaSlice from "../wikipedia-slice";
import apiService from "../../../services/apiService";
import { RootState } from "../../store";

describe("fetchOnThisDayEvents Async Thunk", () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        wikipedia: wikipediaSlice,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("dispatches fulfilled action when fetching events is successful", async () => {
    const mockResponse = {
      data: { events: [{ id: 1, title: "Event 1" }] },
    } as AxiosResponse;

    // Мокаємо запит до API
    jest.spyOn(apiService, "get").mockResolvedValue(mockResponse);

    // Диспатчимо асинхронну дію
    await store.dispatch(fetchOnThisDayEvents({ month: 9, day: 28 }) as any);

    const state = store.getState() as RootState;

    // Перевіряємо результат
    expect(state.wikipedia.loading).toBe(false);
    expect(state.wikipedia.events).toEqual([{ id: 1, title: "Event 1" }]);
  });

  it("dispatches rejected action when fetching events fails", async () => {
    const mockError = {
      response: { data: "Error occurred" },
    } as AxiosError;

    // Мокаємо невдалий запит до API
    jest.spyOn(apiService, "get").mockRejectedValue(mockError);

    // Диспатчимо асинхронну дію
    await store.dispatch(fetchOnThisDayEvents({ month: 9, day: 28 }) as any);

    const state = store.getState() as RootState;

    // Перевіряємо результат
    expect(state.wikipedia.loading).toBe(false);
    expect(state.wikipedia.error).toBe("Error occurred");
  });
});

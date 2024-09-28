import { DateType } from "../../../../pages/main-page";
import WikipediaListItem from "../wikipedia-list-item";
import { ErrorBoundary } from "react-error-boundary";
import PageFallback from "../../../../components/error/PageFallback";
import Button from "../../../../components/button";
import LoadingComponent from "../../../../components/loading-component";
import { EventsType } from "../../type/type";
import ErrorModal from "../error-modal";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { fetchOnThisDayEvents } from "../../../../redux/slice/wikipedia-slice";

const WikipediaItemsList = ({ month, day }: DateType) => {
  const [isOpenErrorModal, setIsOpenErrorModal] = useState<boolean>(false);
  const { events, loading, error } = useAppSelector((state) => state.wikipedia);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      setIsOpenErrorModal(true);
    }
  }, [error]);

  const onCloseErrorModal = () => {
    setIsOpenErrorModal(false);
  };

  const onLoadWikipediaList = () => {
    dispatch(fetchOnThisDayEvents({ day, month }));
  };

  return (
    <div>
      <h1 className="font-bold text-center text-2xl my-5">
        Events on {month}/{day}
      </h1>
      <div className="flex items-center justify-center">
        <Button onClick={onLoadWikipediaList} disabled={loading}>
          Get list of today's Wikipedia
        </Button>
      </div>
      {loading && <LoadingComponent />}
      <ErrorModal isOpen={isOpenErrorModal} onClose={onCloseErrorModal}>
        <div>An error occurred while receiving data</div>
      </ErrorModal>
      <ErrorBoundary FallbackComponent={PageFallback}>
        <ul className="flex flex-col gap-y-5">
          {events?.map((event: EventsType, index: number) => (
            <li key={index}>
              <WikipediaListItem {...event} />
            </li>
          ))}
        </ul>
      </ErrorBoundary>
    </div>
  );
};

export default WikipediaItemsList;

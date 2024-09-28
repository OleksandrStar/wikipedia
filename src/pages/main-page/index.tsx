import WikipediaItemsList from "../../features/main-page/components/wikipedia-list";
import { useEffect, useState } from "react";

export type DateType = {
  month: number | null;
  day: number | null;
};

const MainPage = () => {
  const [date, setDate] = useState<DateType>({
    month: null,
    day: null,
  });

  useEffect(() => {
    const today = new Date();
    setDate({
      month: today.getMonth() + 1,
      day: today.getDate(),
    });
  }, []);

  return (
    <div className="container mx-auto">
      {date.day && date.month ? (
        <WikipediaItemsList month={date.month} day={date.day} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MainPage;

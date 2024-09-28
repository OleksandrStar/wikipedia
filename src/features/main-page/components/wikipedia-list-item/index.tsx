import { EventsType } from "../../type/type";

const WikipediaListItem = (data: EventsType) => {
  return (
    <div className="rounded-lg bg-white shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Summary</h2>
      <p className="italic text-gray-600 my-2">{data.text}</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Pages</h3>
      <div className="space-y-4">
        {data.pages.map((page) => (
          <div
            key={page.pageid}
            className="rounded-xl bg-gray-100 shadow-lg p-4 transition-transform transform hover:scale-105"
          >
            <h4
              className="text-lg font-semibold mb-2"
              dangerouslySetInnerHTML={{ __html: page.displaytitle }}
            />
            <div className="flex items-center gap-3">
              <div className="w-1/3">
                {page.thumbnail && (
                  <img
                    src={page.thumbnail.source}
                    alt={page.title}
                    className="rounded-md mb-2 object-cover object-center"
                    width={page.thumbnail.width}
                    height={page.thumbnail.height}
                  />
                )}
              </div>
              <div className="w-2/3">
                <p
                  className="text-gray-700 mb-2"
                  dangerouslySetInnerHTML={{ __html: page.extract_html }}
                />
                <a
                  href={page.content_urls.desktop.page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-gray-500">
        Year: <span className="font-bold">{data.year}</span>
      </p>
    </div>
  );
};

export default WikipediaListItem;

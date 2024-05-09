import React from "react";

function Schedule({ time }: { time: any }) {
  time.sort((a: any, b: any) => a.fields.sequenceId - b.fields.sequenceId);

  return (
    <div className="max-w-[600px] w-full flex-1 min-w-[300px] border  my-16 rounded-lg bg-inherit overflow-x-visible ">
      <div className="grid grid-cols-3 bg-secondary py-4 rounded-t-lg">
        <h2 className="text-primary text-2xl font-medium flex justify-center">
          Day
        </h2>
        <h2 className="text-primary text-2xl font-medium flex justify-center">
          Open
        </h2>
        <h2 className="text-primary text-2xl font-medium flex justify-center">
          Close
        </h2>
      </div>
      <div className="w-full p-2 sm:p-4">
        {time &&
          time.map((item: any, index:number) =>
            item.fields.restaurantOpenClosed === true ? (
              <>
                <div
                  key={index}
                  className="grid grid-cols-3 p-2"
                >
                  <h3 className="flex justify-start text-white text-lg md:text-xl font-normal font-sans">
                    {item.fields.dayOfWeek}
                  </h3>
                  <time className="flex justify-center text-gray-300 font-medium flex justify-center text-md md:text-lg">
                    {item.fields.openTime}
                  </time>
                  <time className="flex justify-center text-gray-300 font-medium flex justify-center text-md md:text-lg">
                    {item.fields.closeTime}
                  </time>
                </div>
                <hr className="border-b bg-gray-300" />
              </>
            ) : (
              <>
                <div
                  key={index}
                  className="grid grid-cols-3 p-2 "
                >
                  <h3 className="flex justify-start text-white text-xl font-normal font-sans text-lg md:text-xl ">
                    {item.fields.dayOfWeek}
                  </h3>
                  <span className="col-span-2 text-red-500 font-medium flex justify-center text-lg md:text-xl">
                    Closed
                  </span>
                </div>
                <hr className="border-b bg-gray-300" />
              </>
            )
          )}
      </div>
    </div>
  );
}

export default Schedule;

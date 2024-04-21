import React from "react";

function PageLoadingState({width, height}) {
  return (
    <div className="w-40 h-20 flex items-center justify-center">
      <div id="load" className="flex gap-[2px] justify-center">
        {[1, 2, 3, 4, 5].map((id) => (
          <div className={`${width} ${height} bg-orange-500`}></div>
        ))}
      </div>
    </div>
  );
}

export default PageLoadingState;

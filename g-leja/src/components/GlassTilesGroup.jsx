import React from "react";
import GlassTiles from "./GlassTiles";

function GlassTilesGroup() {
  return (
    <>
      <div className="absolute -left-10 -top-3">
        <GlassTiles width="w-16" height="h-16" />
        <div className="absolute -top-3 -left-3 ">
          <GlassTiles width="w-6" height="h-6" />
        </div>
      </div>
      <div className="absolute top-[15%] -right-12">
        <GlassTiles width="w-14" height="h-14" />
        <div className="absolute -bottom-8 left-0">
          <GlassTiles width="w-5" height="h-10" />
        </div>
      </div>
      <div className="absolute bottom-[25%] -left-10">
        <GlassTiles width="w-12" height="h-12" />
      </div>
      <div className="absolute bottom-[10%] -right-8">
        <GlassTiles width="w-9" height="h-9" />
      </div>
    </>
  );
}

export default GlassTilesGroup;

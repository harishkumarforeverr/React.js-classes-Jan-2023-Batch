import React, { useState, useCallback, useEffect, useMemo } from "react";

export function MemoizedMovie({ title, releaseDate }) {
  console.log("im called", releaseDate);
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
}
// export default React.memo(MemoizedMovie);
export default MemoizedMovie;

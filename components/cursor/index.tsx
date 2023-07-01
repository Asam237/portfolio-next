import { useCallback, useEffect, useRef, useState } from "react";
import css from "./cursor.module.css";

export const Cursor = () => {
  const cursor = useRef<HTMLDivElement>();
  const [hasMoved, setHasMoved] = useState(false);

  return (
    <div
      ref={cursor}
      style={{ opacity: hasMoved ? 1 : 0 }}
      className={css.container}
    />
  );
};

import { useMemo } from "react";

/**
 * Memo css style object.
 * @param style {CSSProperties}
 * @param deps {Array}
 * @returns {CSSProperties}
 */
const useStyle = (style, deps) => useMemo(() => style, deps);

export default useStyle;

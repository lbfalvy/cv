import { Variable } from "@lbfalvy/mini-events";
import React from "react";

export function useVariable<T>(v: Variable<T>): T {
  const [t, set] = React.useState(v.get());
  React.useEffect(() => v.changed(set, true), [v]);
  return t;
}
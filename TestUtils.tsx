import { ReactElement, FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, RenderOptions, RenderResult } from "@testing-library/react";

// providers or wrapper
const Wrappers: FC<any> = ({ children }: any) => <Router>{children}</Router>;

const customRender = (
  ui: ReactElement<any>,
  options?: Omit<RenderOptions, "queries">
): RenderResult<any, any> => render(ui, { wrapper: Wrappers, ...options });

export * from "@testing-library/react";
export { customRender as render };

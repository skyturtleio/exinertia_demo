import axios from "axios";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import Layout from "./layouts/Layout";

axios.defaults.xsrfHeaderName = "x-csrf-token";

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });
    let page = pages[`./pages/${name}.tsx`];
    page.default.layout = page.default.layout || ((page: React.ReactNode) => <Layout children={page} />)

    if (!page) {
      throw new Error(`Page ${name} not found.`);
    }

    return page;
  },
  setup({ App, el, props }) {
    createRoot(el).render(<App {...props} />);
  },
});

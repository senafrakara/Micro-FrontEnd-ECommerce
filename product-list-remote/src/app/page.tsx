"use client";

import { Suspense } from "react";
import Products from "./productList/page";
import { Spin } from "antd";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spin />}>
        <Products />
      </Suspense>
    </Provider>
  );
}

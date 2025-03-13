"use client";

import { Suspense } from "react";
import { Spin } from "antd";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Basket from "@/components/Basket";

export default function Home() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spin />}>
        <Basket />
      </Suspense>
    </Provider>
  );
}

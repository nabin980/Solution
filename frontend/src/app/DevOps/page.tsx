"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, ProductFilters } from "@/api/products";
import Breadcrumb from "@/components/Common/Breadcrumb";
import React, { useState } from "react";
import ProductListFilters from "@/components/ProductList/ProductListFilters";
import ProductList from "@/components/ProductList/ProductList";
import Capabilities from "@/components/Capabilities/Capabilities";
import { Spin, Flex } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Advantage from "@/components/DevOps/Advantage";
import RoadMap from "@/components/DevOps/RoadMap";

const DevOps = () => {
  // const [search, setSearch] = useState<ProductFilters['search']>();
  const [category, setCategory] = useState<ProductFilters["category"]>();
  // const [maxPrice, setMaxPrice] = useState<ProductFilters['maxPrice']>();

  const { data, isFetching } = useQuery({
    queryKey: ["products", { category }],
    queryFn: () => fetchProducts({ category }),
  });
  // const { data, isFetching } = useQuery({
  //   queryKey: ['products', { category, maxPrice, search }],
  //   queryFn: () => fetchProducts({ category, maxPrice, search }),
  // });
  return (
    <>
      <Breadcrumb
        pageName="DevOps"
        description="
                            Looking to embrace DevOps practices & services like agility, automation? Turn to Digo Solution to
                            successfully implement and manage DevOps practice - our experts can help you.
                        "
        animationIcons="https://lottie.host/42fb0ebe-20f3-4472-91fc-1daced1ead4c/ekdk4Wevyh.json"
      />
      <div className="container flex flex-col gap-2 ">
        <div className="my-10 flex  flex-col gap-4 text-center">
          <h1 className="text-4xl font-bold ">Technologies We Use</h1>
          <p> Automate & Measure Your Delivery Process </p>
        </div>
        <ProductListFilters
          onChange={(filters) => {
            setCategory(filters.category);
            // setMaxPrice(filters.maxPrice);
            // setSearch(filters.search);
          }}
        />
        <div>
          {isFetching ? (
            <Spin
              style={{
                fontSize: 48,
                display: "flex",
                justifyContent: "center",
                marginTop: "4rem",
              }}
              indicator={
                <LoadingOutlined
                  style={{ fontSize: 48, display: "flex" }}
                  spin
                />
              }
            />
          ) : (
            data && <ProductList products={data} />
          )}
        </div>
      </div>
      <Capabilities />
      <Advantage/>
      <RoadMap/>
    </>
  );
};

export default DevOps;

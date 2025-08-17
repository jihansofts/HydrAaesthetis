"use client";
import { useState, useEffect } from "react";
import ProductAdminCard from "@/common/ProductAdminCard";

type PreptideCardProps = {
  productId: string;
  index?: number;
  name: string;
  description: string[];
  slug: string;
  price: number;
  image: string;
};

export default function Page() {
  const [vitamins, setVitamins] = useState<PreptideCardProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(""); // default sort
  const [totalPages, setTotalPages] = useState(1);
  const limit = 8;

  const fetchVitamins = async (pageNumber: number, reset = false) => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/product?category=${sort}&limit=${limit}&page=${pageNumber}`
      );
      const data = await res.json();

      setVitamins((prev) =>
        reset ? data.products : [...prev, ...data.products]
      );
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error("Error fetching drips:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 initial fetch
  useEffect(() => {
    fetchVitamins(1, true);
  }, []);

  // 🔥 re-fetch when sort changes
  useEffect(() => {
    setPage(1);
    fetchVitamins(1, true);
  }, [sort]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchVitamins(nextPage);
    }
  };
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-16 py-8">
        <div className="flex lg:flex-row md:flex-col flex-col items-center justify-between px-4">
          <h1 className="lg:text-[40px] md:text-3xl sm:text-2xl text-2xl font-extrabold  text-white">
            All Products List
          </h1>

          <div>
            <label className="block text-lg font-bold mb-2 text-white">
              Category Of Product
            </label>
            <select
              title="all"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full bg-[#2E2E2E] border border-[#2E2E2E] rounded-xl px-4 py-3 text-white">
              <option value="">Select category</option>
              <option value="drop">IV Drips</option>
              <option value="vitamin">Vitamins</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-5">
          {/* Render loaded products */}
          {vitamins.map((item, index) => {
            return (
              <ProductAdminCard
                key={item.productId || index}
                index={index}
                productId={item.productId}
                title={item.name}
                desc={item.description}
                image={item.image}
                price={item.price}
              />
            );
          })}

          {/* Skeleton loaders while fetching */}
          {loading &&
            Array.from({ length: limit }).map((_, i) => (
              <div
                key={`skeleton-${i}`}
                className="animate-pulse rounded-lg bg-[#2E2E2E] p-6 h-72 w-full">
                <div className="h-40 bg-primary rounded-md mb-4"></div>
                <div className="h-4 bg-primary rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-primary rounded w-1/2"></div>
              </div>
            ))}
        </div>

        {page < totalPages && !loading && (
          <div className="mx-auto mt-12 w-full text-center">
            <button
              onClick={handleLoadMore}
              className="text-[16px] cursor-pointer gradient-border font-bold text-gradient px-8 py-4 rounded-lg">
              More Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

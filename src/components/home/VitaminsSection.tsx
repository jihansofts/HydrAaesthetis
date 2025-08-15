import React, { useEffect, useState } from "react";
import Button from "@/common/Button";
import PreptideCard from "@/common/PreptideCard";

type PreptideCardProps = {
  productId: string;
  index?: number; // make it optional
  name: string;
  description: string[];
  slug: string;
  price: number;
  image: string;
};

const VitaminsSection: React.FC = () => {
  const [vitamins, setVitamins] = useState<PreptideCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // current page
  const [totalPages, setTotalPages] = useState(1); // total pages from API
  const limit = 8;

  const fetchVitamins = async (pageNumber: number) => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/product?category=vitamin&limit=${limit}&page=${pageNumber}`
      );
      const data = await res.json();

      // Append new products to existing ones
      setVitamins((prev) => [...prev, ...data.products]);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error("Error fetching vitamins:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchVitamins(1); // fetch first page on load
  }, []);

  const handleLoadMore = () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchVitamins(nextPage);
    }
  };

  return (
    <section id="vitamins" className="bg-bgColor py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-white font-inter text-center text-[36px] md:text-[56px] font-extrabold mb-12">
          Vitamins Injections
        </h2>

        {loading ? (
          <p className="text-white text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {vitamins.map((item, index) => {
              const fullDesc = item.description || "";
              const shortDesc =
                fullDesc.slice(0, 100) + (fullDesc.length > 100 ? "..." : "");

              return (
                <PreptideCard
                  key={item.productId || index} // key for React
                  index={index} // ✅ pass index here
                  productId={item.productId}
                  title={item.name}
                  desc={[shortDesc]}
                  slug={item.slug}
                  image={item.image}
                  price={item.price}
                />
              );
            })}
          </div>
        )}

        {page < totalPages && (
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
};

export default VitaminsSection;

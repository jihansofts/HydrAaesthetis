import React from "react";

const Order = () => {
  const tableItems = [
    {
      name: "Liam James",
      product: "Vitamin C",
      date: "08/17/2025",
      email: "liamjames@example.com",
      phone: "+12025551234",
      price: "$29.99",
    },
    {
      name: "Olivia Emma",
      product: "Protein Powder",
      date: "08/16/2025",
      email: "oliviaemma@example.com",
      phone: "+13125559876",
      price: "$49.99",
    },
    {
      name: "William Benjamin",
      product: "Multivitamin",
      date: "08/15/2025",
      email: "william@example.com",
      phone: "+14155551234",
      price: "$19.99",
    },
    {
      name: "Henry Theodore",
      product: "Fish Oil",
      date: "08/14/2025",
      email: "henry@example.com",
      phone: "+16175554321",
      price: "$24.99",
    },
    {
      name: "Amelia Elijah",
      product: "Probiotics",
      date: "08/13/2025",
      email: "amelia@example.com",
      phone: "+18185556789",
      price: "$34.99",
    },
    {
      name: "Emily Zoe",
      product: "Vitamin D3",
      date: "08/08/2025",
      email: "emily@example.com",
      phone: "+15125554321",
      price: "$14.99",
    },
  ];

  return (
    <div className="bg-[#252525] min-h-screen">
      <div className="container mx-auto px-4 md:px-8 py-10">
        <div className="">
          <h3 className="text- text-xl font-bold sm:text-4xl text-white">
            All Orders
          </h3>
        </div>
        <div className="mt-4 shadow-sm rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left border-separate border-spacing-y-3">
            <thead className="text-white font-medium">
              <tr className="bg-[#2E2E2E] rounded-lg overflow-hidden shadow-sm">
                <th className="px-6 py-4 whitespace-nowrap rounded-tl-lg rounded-bl-lg">
                  Name
                </th>
                <th className="px-6 py-4 whitespace-nowrap">Product</th>
                <th className="px-6 py-4 whitespace-nowrap">Date</th>
                <th className="px-6 py-4 whitespace-nowrap">Email</th>
                <th className="px-6 py-4 whitespace-nowrap">Phone</th>
                <th className="px-6 py-4 whitespace-nowrap rounded-tr-lg rounded-br-lg">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="text-white">
              {tableItems.map((item, idx) => (
                <tr
                  key={idx}
                  className="bg-[#2E2E2E] rounded-lg overflow-hidden shadow-sm"
                >
                  <td className="px-6 py-4 whitespace-nowrap rounded-l-lg">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap rounded-r-lg ">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;

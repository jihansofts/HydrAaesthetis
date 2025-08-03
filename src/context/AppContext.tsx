"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";

// --- Types ---
export interface CartItem {
  productId: string;
  price: number;
  quantity: number;
  title: string;
}

export interface UserDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

interface AppContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  userDetails: UserDetails;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>;
  clearCart: () => void;
  addToCart: (item: CartItem) => void;
  updateUserDetails: (details: UserDetails) => void;
  removeItem: (productId: string) => void;
  goToOrderPage: () => void;
  cartCount: number;
  cartTotal: number;
  isReady: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isReady, setIsReady] = useState(false);

  const router = useRouter();

  // Load from sessionStorage on mount
  useEffect(() => {
    const savedCart = sessionStorage.getItem("cartItems");
    const savedUser = sessionStorage.getItem("userDetails");
    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedUser) setUserDetails(JSON.parse(savedUser));
    setIsReady(true);
  }, []);

  // Persist to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [cartItems, userDetails]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.productId === item.productId);
      if (exists) {
        return prev.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateUserDetails = (details: UserDetails) => {
    setUserDetails(details);
  };

  const removeItem = (productId: string) => {
    setCartItems((prev) => prev.filter((i) => i.productId !== productId));
  };

  const clearCart = () => {
    sessionStorage.removeItem("cartItems");
    sessionStorage.removeItem("userDetails");
    setCartItems([]);
  };

  const goToOrderPage = () => {
    router.push("/order");
  };

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = cartItems.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        userDetails,
        setUserDetails,
        clearCart,
        addToCart,
        updateUserDetails,
        removeItem,
        goToOrderPage,
        cartCount,
        cartTotal,
        isReady,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be inside AppProvider");
  return ctx;
};

// "use client";

// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from "react";
// import { useRouter } from "next/navigation";

// // ------------------ Types ------------------

// interface CartItem {
//   productId: string;
//   price: number;
//   quantity: number;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   [key: string]: any; // allows flexibility for other props
// }

// interface UserDetails {
//   fullName: string;
//   email: string;
//   phone: string;
//   address: string;
// }

// interface AppContextType {
//   cartItems: CartItem[];
//   userDetails: UserDetails;
//   clearCart: () => void;
//   addToCart: (item: CartItem) => void;
//   updateUserDetails: (details: UserDetails) => void;
//   // increaseQuantity: (productId: string) => void;
//   // decreaseQuantity: (productId: string) => void;
//   removeItem: (productId: string) => void;
//   goToOrderPage: () => void;
//   cartCount: number;
//   cartTotal: number;
// }

// // ------------------ Context Setup ------------------

// const AppContext = createContext<AppContextType | undefined>(undefined);

// // ------------------ Provider ------------------

// export const AppProvider = ({ children }: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [userDetails, setUserDetails] = useState<UserDetails>({
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const router = useRouter();

//   // Load from session
//   useEffect(() => {
//     const savedCart = sessionStorage.getItem("cartItems");
//     const savedUserDetails = sessionStorage.getItem("userDetails");

//     if (savedCart) setCartItems(JSON.parse(savedCart));
//     if (savedUserDetails) setUserDetails(JSON.parse(savedUserDetails));
//   }, []);

//   // Save to session
//   useEffect(() => {
//     sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
//     sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
//   }, [cartItems, userDetails]);

//   const addToCart = (item: CartItem) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find(
//         (i) => i.productId === item.productId
//       );
//       if (existingItem) {
//         return prevItems.map((i) =>
//           i.productId === item.productId
//             ? { ...i, quantity: i.quantity + 1 }
//             : i
//         );
//       } else {
//         return [...prevItems, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   const updateUserDetails = (details: UserDetails) => {
//     setUserDetails(details);
//   };

//   // const increaseQuantity = (productId: string) => {
//   //   setCartItems((prevItems) =>
//   //     prevItems.map((item) =>
//   //       item.productId === productId
//   //         ? { ...item, quantity: item.quantity + 1 }
//   //         : item
//   //     )
//   //   );
//   // };

//   // const decreaseQuantity = (productId: string) => {
//   //   setCartItems((prevItems) =>
//   //     prevItems
//   //       .map((item) =>
//   //         item.productId === productId
//   //           ? { ...item, quantity: Math.max(1, item.quantity - 1) }
//   //           : item
//   //       )
//   //       .filter((item) => item.quantity > 0)
//   //   );
//   // };

//   const removeItem = (productId: string) => {
//     setCartItems((prevItems) =>
//       prevItems.filter((item) => item.productId !== productId)
//     );
//   };

//   const clearCart = () => {
//     sessionStorage.clear();
//     sessionStorage.clear();
//     setCartItems([]);
//   };

//   const goToOrderPage = () => {
//     router.push("/order");
//   };

//   const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
//   const cartTotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   const value: AppContextType = {
//     cartItems,
//     userDetails,
//     clearCart,
//     addToCart,

//     updateUserDetails,
//     removeItem,
//     goToOrderPage,
//     cartCount,
//     cartTotal,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// // ------------------ Hook ------------------

// export const useAppContext = () => {
//   const context = useContext(AppContext);
//   if (!context)
//     throw new Error("useAppContext must be used within AppProvider");
//   return context;
// };

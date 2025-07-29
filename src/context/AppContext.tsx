"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";

// ------------------ Types ------------------

interface CartItem {
  productId: string;
  price: number;
  quantity: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // allows flexibility for other props
}

interface UserDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

interface AppContextType {
  cartItems: CartItem[];
  userDetails: UserDetails;
  addToCart: (item: CartItem) => void;
  updateUserDetails: (details: UserDetails) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  removeItem: (productId: string) => void;
  goToOrderPage: () => void;
  cartCount: number;
  cartTotal: number;
}

// ------------------ Context Setup ------------------

const AppContext = createContext<AppContextType | undefined>(undefined);

// ------------------ Provider ------------------

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const router = useRouter();

  // Load from session
  useEffect(() => {
    const savedCart = sessionStorage.getItem("peptideCart");
    const savedUserDetails = sessionStorage.getItem("peptideUserDetails");

    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedUserDetails) setUserDetails(JSON.parse(savedUserDetails));
  }, []);

  // Save to session
  useEffect(() => {
    sessionStorage.setItem("peptideCart", JSON.stringify(cartItems));
    sessionStorage.setItem("peptideUserDetails", JSON.stringify(userDetails));
  }, [cartItems, userDetails]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.productId === item.productId
      );
      if (existingItem) {
        return prevItems.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const updateUserDetails = (details: UserDetails) => {
    setUserDetails(details);
  };

  const increaseQuantity = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.productId !== productId)
    );
  };

  const goToOrderPage = () => {
    router.push("/order");
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value: AppContextType = {
    cartItems,
    userDetails,
    addToCart,
    updateUserDetails,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    goToOrderPage,
    cartCount,
    cartTotal,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// ------------------ Hook ------------------

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
};

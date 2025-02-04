import { clsx, type ClassValue } from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
//#region Object Interfaces
interface IObject {
  name: string;
  value: number;
}

interface IUnsafeObject extends Partial<IObject> {
  // if you know the type you can narrow it down here
  // e.g. [key: string]: boolean | number
  [key: string]: any;
}

interface ICollection<TType> {
  [key: string]: TType;
}
//#endregion
//#region Components Interfaces
export interface IWorkSliderBtns {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}

export interface IWorkSliderBtns {
  value: number;
}

export interface IPageTransition {
  children: ReactNode;
}

export interface IThemeContextProvider {
  children: ReactNode;
}

export interface ILoginContextProvider {
  children: ReactNode;
}

export interface ISocial {
  containerStyles: string;
  iconStyles: string;
}

export interface IDashbboard {
  children: ReactNode;
}
//#endregion
//#region Context Types
export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export type LoginContextType = {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
};
//#endregion
//#region API Types
export type ProductType = {
  id: number;
  productName: string;
  SKU: number;
  productDescriprion: string;
  category: string;
  brand: string;
  model: string;
  releaseDate: Date;
  price: number;
  image: string;
  warehouseStocks: ICollection<WarehouseStockType>;
  shopStocks: ICollection<ShopStockType>;
  orderDetails: ICollection<OrderDetailType>;
};
export type CreditCardType = {
  id: number;
  cardNumber: string;
  string: Date;
  userId: number;
  image: string;

  userProfile: UserProfileType;
  payments: ICollection<PaymentType>;
};

export type EmployeeType = {
  id: number;
  position: string;
  string: Date;
  userId: number;
  shopId: number;
  image: string;

  userProfile: UserProfileType;
  shop: ShopType;
};

export type PaymentType = {
  id: number;
  userId: number;
  CreditCardId: number;
  PaymentType: string;
  TotalAmount: number;
  paymentDate: Date;

  userProfile: UserProfileType;
  creditCard: CreditCardType;
  orders: ICollection<OrderType>;
};

export type OrderType = {
  id: number;
  refund: boolean;
  payment: PaymentType;
  shopId: number;
  orderDetails: ICollection<OrderDetailType>;
};

export type OrderDetailType = {
  id: number;
  orderiId: number;
  productId: number;
  quantity: number;
  unitPrice: number;

  order: OrderType;
  product: ProductType;
};

export type ShopType = {
  id: number;
  shopName: string;
  shopAddress: string;
  city: string;
  shopState: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
  shopDescription: string;
  shopStocks: ICollection<ShopStockType>;
  employees: ICollection<EmployeeType>;
};

export type ShopStockType = {
  id: number;
  productId: number;
  shopId: number;
  quantity: number;
  product: ProductType;
  shop: ShopType;
};

export type UserProfileType = {
  id: number;
  username: number;
  passwordHash: string;
  dob: Date;
  phoneNumber: string;
  userRole: string;
  payments: ICollection<PaymentType>;
  creditCards: ICollection<CreditCardType>;
  employees: ICollection<EmployeeType>;
};

export type WarehouseStockType = {
  id: number;
  productId: number;
  warehouseId: number;
  quantity: number;
  product: ProductType;
};

//#endregion
//#region service functions
export async function login(username: string, password: string) {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    const { token } = await response.json();
    localStorage.setItem("token", token);
    return token;
  } else {
    const error = await response.json();
    throw new Error(error.error || "Login failed");
  }
}
//#endregion

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
  userName: string;
  email: string;
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
// Importa la libreria fetch

// Definisci un'interfaccia per la risposta del login
interface LoginResponse {
  token: string;
}

interface ErrorResponse {
  error: string;
}

// Funzione per eseguire il login
export async function login(email: string, password: string) {
  console.log("Esegui la richiesta di login...");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://localhost:7179";
  console.log("API URL:", apiUrl);
  const loginUrl = `${apiUrl}/api/userprofiles/login`;

  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, passwordHash: password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log("Errore nella risposta del server:", errorData);
      throw new Error(errorData.message || "Login fallito");
    }

    // Prova a ottenere i dati JSON dalla risposta
    const data = await response.json();
    console.log("Risposta dal server:", data);
    return data;

  } catch (error) {
    // Gestisci gli errori
    console.error("Errore durante la richiesta:", error);
    throw error;
  }
}
//#endregion

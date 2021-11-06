export type AuthState = {
  login: { loading: boolean; data: null | User; error: null | unknown };
  signup: { loading: boolean; data: null | SignupResult; error: null | unknown };
  addRecomm: { loading: boolean; data: null | string; error: null | unknown };
  emailCheck: 'ok' | 'exist';
};

export interface MyKnownError {
  message: unknown;
}

export type AuthPayload = {
  login: { email: string; password: string };
  logout: { email: string; name: string };
  signup: {
    name: string;
    email: string;
    password: string;
    tel: string;
    location: string;
    manager: string;
    bank: string;
    accountNumber: string;
    accountName: string;
    StoreId: number;
  };
  addRecomm: {
    userId: number;
    brand: string;
  };
  auth: null;
  updateToken: {
    type: 'mobile' | 'web';
    token: string;
  };
};

export type User = {
  id: number;
  name: string;
  email: string;
  tel: string;
  location: string;
  manager: string;
  logo: null | string;
  bank: string;
  accountNumber: string;
  accountName: string;
  state: number;
  lastLogin: Date;
  approvedAt: null | Date;
  webPushToken: string | null;
  mobilePushToken: string | null;
  Store: {
    id: number;
    name: string;
  };
};

export type SignupResult = {
  id: number;
  name: string;
  email: string;
};

export type AddRecommResult = {
  id: number;
  BrandId: string;
  name: string;
  updatedAt: Date;
  createdAt: Date;
};

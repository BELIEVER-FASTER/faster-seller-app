export type ProductState = {
  loadProductList: {
    loading: boolean;
    data: null | ProductListItem[];
    error: null | unknown;
  };
  loadDetail: {
    loading: boolean;
    data: null | ProductDetail;
    error: null | unknown;
  };
  addProduct: {
    loading: boolean;
    data: null | ProductDetail;
    error: null | unknown;
  };
  updateProduct: {
    loading: boolean;
    data: null | ProductDetail;
    error: null | unknown;
  };
  existData: {
    loading: boolean;
    data: null | ProductDetail;
    error: null | unknown;
  };
  totalCnt: number;
  loadMore: boolean;
  hasMore: boolean;
  page: number;
  reloadBlock: boolean;
};

export interface MyKnownError {
  message: unknown;
}
export type ProductPayload = {
  loadProductList: {
    page?: number;
    sort?: "created" | "name" | "price";
    keyword?: string;
  };
  loadProductCnt: {
    keyword?: string;
  };
  toggleActive: {
    isActive: 1 | 0;
    productId: number;
  };
  loadDetail: {
    type: "exist" | "updated";
    productId: number;
  };
  addProduct: {
    images: PImage[];
    name: string;
    price: string;
    CategoryMainId: number;
    CategoryMiddleId: number;
    composition: string;
    isPiece: number;
    detail: string;
    BrandId: number;
    country: number;
    countryName: string;
    colors: Color[];
    sizes: {id: number; value: string; detail?: {name: string; value: string}[]}[];
  };
  updateProduct: {
    ProductId: number;
    images: PImage[];
    name: string;
    price: string;
    CategoryMainId: number;
    CategoryMiddleId: number;
    composition: string;
    isPiece: number;
    detail: string;
    BrandId: number;
    country: number;
    countryName: string;
    colors: Color[];
    sizes: {id: number; value: string; detail?: {name: string; value: string}[]}[];
  };
  removeProduct: {ProductId: number; name: string};
};
export type ProductListItem = {
  id: number;
  thumbnail: string;
  name: string;
  price: number;
  createdAt: Date;
  isActive: number;
  state: number;
  UpdatedProduct: {name: string; price: number; thumbnail: string} | null;
};

export type ProductDetail = {
  id: number;
  name: string;
  thumbnail: string;
  price: number;
  isPiece: number;
  isActive: number;
  composition: string;
  detail: string;
  state: number;
  countryName: string;
  approavedAt: null | Date;
  createdAt: Date;
  CountryId: number;
  Brand: Brand;
  Country: CategoryMain;
  CategoryMain: CategoryMain;
  CategoryMiddle: CategoryMain;
  ProductSizes: ProductSize[];
  ProductColors: ProductColor[];
  pImages: PImage[];
  ProductId?: number;
};
export interface Brand {
  id: number;
  name: string;
  logo: null;
  tel: string;
  Store: Store;
}

export interface Store {
  name: string;
}

export interface CategoryMain {
  id: number;
  name: string;
}

export interface ProductColor {
  id: number;
  Color: Color;
}

export interface Color {
  id: number;
  name: string;
  hex: string;
}

export interface PImage {
  id: number;
  src: string;
  filename: string;
}
export interface ProductSize {
  id: number;
  custom?: string;
  chest?: string;
  shoulder?: string;
  arm?: string;
  total?: string;
  waist?: string;
  rise?: string;
  thigh?: string;
  hem?: string;
  SizeOpt: CategoryMain;
}

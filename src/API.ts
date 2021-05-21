/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  categoryName: string,
};

export type ModelCategoryConditionInput = {
  categoryName?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Category = {
  __typename: "Category",
  id?: string,
  categoryName?: string,
  product?: ModelProductConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items?:  Array<Product | null > | null,
  nextToken?: string | null,
};

export type Product = {
  __typename: "Product",
  id?: string,
  productName?: string,
  productDescription?: string | null,
  imageUri?: string,
  images?: Array< string >,
  price?: number,
  categoryID?: string,
  category?: Category,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateCategoryInput = {
  id: string,
  categoryName?: string | null,
};

export type DeleteCategoryInput = {
  id?: string | null,
};

export type CreateProductInput = {
  id?: string | null,
  productName: string,
  productDescription?: string | null,
  imageUri: string,
  images: Array< string >,
  price: number,
  categoryID: string,
};

export type ModelProductConditionInput = {
  productName?: ModelStringInput | null,
  productDescription?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  images?: ModelStringInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProductInput = {
  id?: string | null,
  productName?: string | null,
  productDescription?: string | null,
  imageUri?: string | null,
  images?: Array< string > | null,
  price?: number | null,
  categoryID: string,
};

export type DeleteProductInput = {
  categoryID: string,
};

export type CreateCartProductInput = {
  id?: string | null,
  productID: string,
};

export type ModelCartProductConditionInput = {
  productID?: ModelIDInput | null,
  and?: Array< ModelCartProductConditionInput | null > | null,
  or?: Array< ModelCartProductConditionInput | null > | null,
  not?: ModelCartProductConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CartProduct = {
  __typename: "CartProduct",
  id?: string,
  productID?: string,
  product?: Product,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateCartProductInput = {
  id: string,
  productID?: string | null,
};

export type DeleteCartProductInput = {
  id?: string | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  categoryName?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items?:  Array<Category | null > | null,
  nextToken?: string | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  productName?: ModelStringInput | null,
  productDescription?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  images?: ModelStringInput | null,
  price?: ModelIntInput | null,
  categoryID?: ModelIDInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCartProductFilterInput = {
  id?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelCartProductFilterInput | null > | null,
  or?: Array< ModelCartProductFilterInput | null > | null,
  not?: ModelCartProductFilterInput | null,
};

export type ModelCartProductConnection = {
  __typename: "ModelCartProductConnection",
  items?:  Array<CartProduct | null > | null,
  nextToken?: string | null,
};

export type CreateCategoryMutationVariables = {
  input?: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    categoryName: string,
    product?:  {
      __typename: "ModelProductConnection",
      items?:  Array< {
        __typename: "Product",
        id: string,
        productName: string,
        productDescription?: string | null,
        imageUri: string,
        images: Array< string >,
        price: number,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input?: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    categoryName: string,
    product?:  {
      __typename: "ModelProductConnection",
      items?:  Array< {
        __typename: "Product",
        id: string,
        productName: string,
        productDescription?: string | null,
        imageUri: string,
        images: Array< string >,
        price: number,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input?: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    categoryName: string,
    product?:  {
      __typename: "ModelProductConnection",
      items?:  Array< {
        __typename: "Product",
        id: string,
        productName: string,
        productDescription?: string | null,
        imageUri: string,
        images: Array< string >,
        price: number,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input?: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    productName: string,
    productDescription?: string | null,
    imageUri: string,
    images: Array< string >,
    price: number,
    categoryID: string,
    category?:  {
      __typename: "Category",
      id: string,
      categoryName: string,
      product?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input?: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    productName: string,
    productDescription?: string | null,
    imageUri: string,
    images: Array< string >,
    price: number,
    categoryID: string,
    category?:  {
      __typename: "Category",
      id: string,
      categoryName: string,
      product?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input?: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    productName: string,
    productDescription?: string | null,
    imageUri: string,
    images: Array< string >,
    price: number,
    categoryID: string,
    category?:  {
      __typename: "Category",
      id: string,
      categoryName: string,
      product?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCartProductMutationVariables = {
  input?: CreateCartProductInput,
  condition?: ModelCartProductConditionInput | null,
};

export type CreateCartProductMutation = {
  createCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      productName: string,
      productDescription?: string | null,
      imageUri: string,
      images: Array< string >,
      price: number,
      categoryID: string,
      category?:  {
        __typename: "Category",
        id: string,
        categoryName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCartProductMutationVariables = {
  input?: UpdateCartProductInput,
  condition?: ModelCartProductConditionInput | null,
};

export type UpdateCartProductMutation = {
  updateCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      productName: string,
      productDescription?: string | null,
      imageUri: string,
      images: Array< string >,
      price: number,
      categoryID: string,
      category?:  {
        __typename: "Category",
        id: string,
        categoryName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCartProductMutationVariables = {
  input?: DeleteCartProductInput,
  condition?: ModelCartProductConditionInput | null,
};

export type DeleteCartProductMutation = {
  deleteCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      productName: string,
      productDescription?: string | null,
      imageUri: string,
      images: Array< string >,
      price: number,
      categoryID: string,
      category?:  {
        __typename: "Category",
        id: string,
        categoryName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCategoryQueryVariables = {
  id?: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    categoryName: string,
    product?:  {
      __typename: "ModelProductConnection",
      items?:  Array< {
        __typename: "Product",
        id: string,
        productName: string,
        productDescription?: string | null,
        imageUri: string,
        images: Array< string >,
        price: number,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorysQuery = {
  listCategorys?:  {
    __typename: "ModelCategoryConnection",
    items?:  Array< {
      __typename: "Category",
      id: string,
      categoryName: string,
      product?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  categoryID?: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    productName: string,
    productDescription?: string | null,
    imageUri: string,
    images: Array< string >,
    price: number,
    categoryID: string,
    category?:  {
      __typename: "Category",
      id: string,
      categoryName: string,
      product?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  categoryID?: string | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items?:  Array< {
      __typename: "Product",
      id: string,
      productName: string,
      productDescription?: string | null,
      imageUri: string,
      images: Array< string >,
      price: number,
      categoryID: string,
      category?:  {
        __typename: "Category",
        id: string,
        categoryName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCartProductQueryVariables = {
  id?: string,
};

export type GetCartProductQuery = {
  getCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      productName: string,
      productDescription?: string | null,
      imageUri: string,
      images: Array< string >,
      price: number,
      categoryID: string,
      category?:  {
        __typename: "Category",
        id: string,
        categoryName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCartProductsQueryVariables = {
  filter?: ModelCartProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartProductsQuery = {
  listCartProducts?:  {
    __typename: "ModelCartProductConnection",
    items?:  Array< {
      __typename: "CartProduct",
      id: string,
      productID: string,
      product?:  {
        __typename: "Product",
        id: string,
        productName: string,
        productDescription?: string | null,
        imageUri: string,
        images: Array< string >,
        price: number,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    categoryName: string,
    product?:  {
      __typename: "ModelProductConnection",
      items?:  Array< {
        __typename: "Product",
        id: string,
        productName: string,
        productDescription?: string | null,
        imageUri: string,
        images: Array< string >,
        price: number,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    categoryName: string,
    product?:  {
      __typename: "ModelProductConnection",
      items?:  Array< {
        __typename: "Product",
        id: string,
        productName: string,
        productDescription?: string | null,
        imageUri: string,
        images: Array< string >,
        price: number,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    categoryName: string,
    product?:  {
      __typename: "ModelProductConnection",
      items?:  Array< {
        __typename: "Product",
        id: string,
        productName: string,
        productDescription?: string | null,
        imageUri: string,
        images: Array< string >,
        price: number,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    productName: string,
    productDescription?: string | null,
    imageUri: string,
    images: Array< string >,
    price: number,
    categoryID: string,
    category?:  {
      __typename: "Category",
      id: string,
      categoryName: string,
      product?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    productName: string,
    productDescription?: string | null,
    imageUri: string,
    images: Array< string >,
    price: number,
    categoryID: string,
    category?:  {
      __typename: "Category",
      id: string,
      categoryName: string,
      product?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    productName: string,
    productDescription?: string | null,
    imageUri: string,
    images: Array< string >,
    price: number,
    categoryID: string,
    category?:  {
      __typename: "Category",
      id: string,
      categoryName: string,
      product?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCartProductSubscription = {
  onCreateCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      productName: string,
      productDescription?: string | null,
      imageUri: string,
      images: Array< string >,
      price: number,
      categoryID: string,
      category?:  {
        __typename: "Category",
        id: string,
        categoryName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCartProductSubscription = {
  onUpdateCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      productName: string,
      productDescription?: string | null,
      imageUri: string,
      images: Array< string >,
      price: number,
      categoryID: string,
      category?:  {
        __typename: "Category",
        id: string,
        categoryName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCartProductSubscription = {
  onDeleteCartProduct?:  {
    __typename: "CartProduct",
    id: string,
    productID: string,
    product?:  {
      __typename: "Product",
      id: string,
      productName: string,
      productDescription?: string | null,
      imageUri: string,
      images: Array< string >,
      price: number,
      categoryID: string,
      category?:  {
        __typename: "Category",
        id: string,
        categoryName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

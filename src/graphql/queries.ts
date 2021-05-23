/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      categoryName
      product {
        items {
          id
          productName
          productDescription
          imageUri
          images
          price
          categoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoryName
        product {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($categoryID: ID!) {
    getProduct(categoryID: $categoryID) {
      id
      productName
      productDescription
      imageUri
      images
      price
      categoryID
      category {
        id
        categoryName
        product {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $categoryID: ID
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProducts(
      categoryID: $categoryID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        productName
        productDescription
        imageUri
        images
        price
        categoryID
        category {
          id
          categoryName
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCartProduct = /* GraphQL */ `
  query GetCartProduct($id: ID!) {
    getCartProduct(id: $id) {
      id
      productID
      product {
        id
        productName
        productDescription
        imageUri
        images
        price
        categoryID
        category {
          id
          categoryName
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

export const getAllCategories = /* GraphQL */ `
  query getAllCategories {
    listCategorys {
      items {
        categoryName
        id
        product {
          items {
            id
          }
        }
      }
    }
  }
`;
export const listCartProducts = /* GraphQL */ `
  query ListCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productID
        product {
          id
          productName
          productDescription
          imageUri
          images
          price
          categoryID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

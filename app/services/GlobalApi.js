import { gql, GraphQLClient } from "graphql-request";

const hygraphClient = new GraphQLClient(`https://us-west-2.cdn.hygraph.com/content/${process.env.NEXT_PUBLIC_MASTER_URL_KEY}/master`); 
//function to get categories
const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        bgcolor {
          hex
        }
        id
        name
        icon {
          url
        }
      }
    }
  `;
  try {
    const result = await hygraphClient.request(query);
    return result.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories");
  }
};

const getAllHelperList = async () => {
  const query = gql`
    query MyQuery {
      helpers {
        about
        address
        email
        id
        name
        rating
        images {
          url
        }
        category {
          name
          bgcolor {
            hex
          }
        }
      }
    }
  `;
  try {
    const result = await hygraphClient.request(query);
    return result.helpers;
  } catch (error) {
    console.error("Error fetching all business lists:", error);
    throw new Error("Failed to fetch all business lists");
  }
};

const getCategoryData = async (categoryId) => {
  const query = gql`
    query GetCategory($categoryId: ID!) {
    categories(where: {id: $categoryId}) {
      id
      name
      description
      faq
      checklist
      helper {
        id
        name
        rating
      }
    }
  }
  `;
  try {
    const result = await hygraphClient.request(query, {categoryId});
    return result.categories;
    
  } catch (error) {
    console.error("Error fetching categoory data", error);
    throw new Error("Failed to fetch category data");
  }
};

export default {
  getCategory,
  getAllHelperList,
  getCategoryData,
};

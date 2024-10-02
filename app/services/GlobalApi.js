import { gql, default as request } from "graphql-request";

const MASTER_URL = `https://us-west-2.cdn.hygraph.com/content/${process.env.NEXT_PUBLIC_MASTER_URL_KEY}/master`;



//function to get categories
const getCategory= async() =>{
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
    `
    try{
      const result=await request(MASTER_URL,query);
      return result;
    }
    catch(error){
      console.error('Error fetching categories:', error)
      throw new Error('Failed to fetch categories')
    }
    

}

export default {
    getCategory
}
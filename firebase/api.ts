import { getDocs } from 'firebase/firestore';
import { articleCollection } from '.';


export const getArticles = async() => {
  const { docs } = await getDocs(articleCollection);
  console.log(docs);
}
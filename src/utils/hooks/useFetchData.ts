import { useEffect, useState } from "react";
import axios from 'axios';
import { cardIdentificationRegEx } from "../validation-rules";

const useFetchData = (url: string, isSvg: boolean = false) => {

   const [apiData, setApiData] = useState(null); 
   const [isApiDataLoading, setIsApiDataLoading] = useState<boolean>(false);
   const [apiError, setApiError] = useState<Object | undefined>();
   
   let data = null;
   const fetchAPiData = async () => {
       setIsApiDataLoading(true);
       try {
           const resp = await axios.get(url);
           if(isSvg) {
               data = await resp?.data;
           } else {
               data = await resp?.data?.data;
               data.map((res: any) => res.regExFormat = cardIdentificationRegEx[res.id]);
           }
           setApiData(data);
           setIsApiDataLoading(false);
           return data;
       } catch(error: any) {
           setApiError(error);
           setIsApiDataLoading(false);
           throw error;
       }
   }
   useEffect(() => {
        fetchAPiData();
        return () => (setApiData(null))
    }, []);

    return { apiData, isApiDataLoading,  apiError }
}
export default useFetchData;
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { BASE_PATH } from "../constants"; 
import { PaginatedFetch} from "../Types"


function usePaginatedDataFetch(endpoint: string, pageNum: string) {

    const { data, status } = useQuery([`${endpoint}/?page=${pageNum}`], (): Promise<PaginatedFetch> => axios.get(BASE_PATH + endpoint + `/?page=${pageNum}`).then(response => response.data))

    return { data, status }

}

export default usePaginatedDataFetch
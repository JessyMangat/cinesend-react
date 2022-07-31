import create from "zustand";

interface StoreType {
    pageNum: number,
    totalResults: number,
    setPageNum: Function,
    setTotalResults: Function
}

const useTablePageStore = create<StoreType>((set) => ({
    //initial state
    pageNum: 1,
    totalResults: 0,
    //methods to mutate state
    setPageNum: (pageNum: number) => set((state) => ({
        ...state,
        pageNum
    })),
    setTotalResults: (totalResults: number) => set((state) => ({
        ...state,
        totalResults
    })),

}))

export default useTablePageStore
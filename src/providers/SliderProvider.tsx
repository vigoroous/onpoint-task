import React, { FC, useState } from "react";

type SliderContextType = [
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
]

export const SliderContext = React.createContext<SliderContextType>({} as any);

type Props = {
    children?: JSX.Element[] | JSX.Element;
}
const SliderProvider: FC<Props> = ({children}) => {
    const [page, setPage] = useState(0); 
    return (
        <SliderContext.Provider value={[page, setPage]}>
            {children}
        </SliderContext.Provider>
    )
}

export default SliderProvider;
import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "./constant";

const useRestautantMenu = (resId)=> {
    const [restaInfo, setRestaInfo] = useState(null);

    useEffect(()=> {
        fetchMenu();
    }, [])
    fetchMenu = async ()=> {
        const res = await fetch(RESTAURANT_MENU + resId);
        const resJson = await res.json();
        setRestaInfo(resJson.data);
    }
    return restaInfo;
}

export default useRestautantMenu;
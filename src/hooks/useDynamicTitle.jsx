import { useEffect } from "react";


const useDynamicTitle = (pageTitle) => {
    useEffect(() => {
        document.title = pageTitle;
      }, [pageTitle]);
    };

export default useDynamicTitle;
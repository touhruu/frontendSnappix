import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const usePagination = ( parentRef: any, childRef: any, callback: any ) => {
    const [page, goNextPage] = useState<number>(1);
    const observer: any = useRef()

    // useEffect(() => console.log(childRef.current), [childRef.current]);

    useLayoutEffect(() => {
        // console.log(parentRef.current)
        const options: any = {
            root: null,
            rootMargin: "100px",
            threshold: 0,
        };

        observer.current = new IntersectionObserver(([target]) => {
            if(target.isIntersecting) {
                callback();
                goNextPage(prev => prev + 1);
            }
        }, options)
        observer.current.observe(childRef.current);

        return function () {
            console.log(childRef.current)
            observer.current.unobserve(childRef.current);
        };

    }, [callback, childRef])

    return page;
}

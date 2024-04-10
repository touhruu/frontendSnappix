import { Box } from "@mui/material"
import { PostSummary } from "@snappix/components"
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../store/reducers/postsReducer";
import { useRef } from "react";
import { usePagination } from "../hooks/usePagination";
import { useEvent } from "../hooks/useEvent";

const POST_PAGE_LIMIT = 3;

export const NewsFeed = () => {
    const dispatch = useDispatch();
    const parentRef = useRef();
    const childRef = useRef();
    const arrPosts = useSelector((state: any) => state.posts.posts);

    const getPaginatedPosts = useEvent(() => {
        console.log(page);
        dispatch(getAllPosts({page: page, limit: POST_PAGE_LIMIT}));
    });
    
    const page = usePagination(parentRef, childRef, getPaginatedPosts);

    // useEffect(() => {
    //     dispatch(getAllPosts({page: page, limit: limit}));
    // }, [dispatch, page])

    // console.log(arrPosts)
    return (
        <Box display={'flex'} flexDirection={'column'} ref={parentRef}>
            {arrPosts.map((post: any) => (
                <Box pt={2} key={post.id}>
                    <PostSummary title={post.title} body={post.body}/>
                </Box>
            ))}
            <Box ref={childRef}></Box>
        </Box>
    )
}
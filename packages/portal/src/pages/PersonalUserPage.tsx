import { Box } from "@mui/material"
import { AboutMe, CustomTabPanel, PostSummary, ProfileHeader, StoriesPersonalPage } from "@snappix/components";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setTab } from "../store/reducers/tabReducer";
import { useSelector } from "react-redux";

export const PersonalUserPage = () => {
    const dispatch = useDispatch();
    const valueTab = useSelector((state: any) => state.tabs.tabIndex);

    const tabs = [
        {
            value: 1,
            label: 'Timeline',
        },
        {
            value: 2,
            label: 'About',
        },
        {
            value: 3,
            label: 'Friends',
        },
        {
            value: 4,
            label: 'Photos',
        },
    ]

    const onTabSelected = useCallback((value: number) => {
        dispatch(setTab(value));
    }, [dispatch]);

    return (
        <Box
            width={'90%'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            pt={2}
            position={'relative'}
        >
            <ProfileHeader onTabSelected={onTabSelected} tabs={tabs} />
            <CustomTabPanel value={valueTab} index={1}>
                <Box
                    width={'100%'}
                    display={'flex'}
                    gap={2}
                    pt={2}
                    justifyContent={'space-between'}
                >
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        gap={2}
                    >
                        <AboutMe />
                        <Box
                            width={300}
                            height={200}
                            bgcolor={'#1d1d24'}
                            borderRadius={'12px'}
                            border={'1px solid #343437'}
                        />
                    </Box>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                    >
                        <PostSummary title="Snappix" body="My first post in Snappix..."/>
                        <PostSummary title="Snappix" body="My first post in Snappix..."/>
                        <PostSummary title="Snappix" body="My first post in Snappix..."/>
                        <PostSummary title="Snappix" body="My first post in Snappix..."/>
                    </Box>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        gap={2}
                    >
                        <StoriesPersonalPage />
                    </Box>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={valueTab} index={2}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={valueTab} index={3}>
                Item Three
            </CustomTabPanel>
            <CustomTabPanel value={valueTab} index={4}>
                Item Four
            </CustomTabPanel>
        </Box>
    )
}
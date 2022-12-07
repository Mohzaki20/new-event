import React, { useState } from "react";
import {
    tab1,
    tab2,
    tab3
} from "../../../../design-system/components/OurPrograms/OurProgramData";
import { Line, TabSpan, Wrapper } from "./style";

import OurPrograms from "../../../../design-system/components/OurPrograms/OurPrograms";
import theme from "../../../../design-system/config";
export default function Tabs() {
    const [tab, setTab] = useState("tab1");

    const switchTab = (tab) => {
        setTab(tab);
    };
    return (
        <>
            <Wrapper>
                <TabSpan
                    style={{
                        color: tab === "tab1" ? theme.primary : "",
                        borderBottom: tab === "tab1" ? `1px solid ${theme.black}` : "",
                    }}
                    onClick={() => {
                        switchTab("tab1");
                    }}
                >
                    First Day
                </TabSpan>
                <TabSpan
                    style={{
                        color: tab === "tab2" ? theme.primary : "",
                        borderBottom: tab === "tab2" ? `1px solid ${theme.black}` : "",
                    }}
                    onClick={() => {
                        switchTab("tab2");
                    }}
                >
                    Second Day
                </TabSpan>
                <TabSpan
                    style={{
                        color: tab === "tab3" ? theme.primary : "",
                        borderBottom: tab === "tab3" ? `1px solid ${theme.black}` : "",
                    }}
                    onClick={() => {
                        switchTab("tab3");
                    }}
                >
                    Third Day
                </TabSpan>
            </Wrapper>
            <Line />
            {tab === "tab2"
                ? tab2.map((item) => {
                    return (
                        <OurPrograms
                            alt={item.alt}
                            description={item.Description}
                            img={item.img}
                            name={item.name}
                            room={item.room}
                            time={item.time}
                            title={item.title}
                            key={item.id}
                        />
                    );
                })
                : tab === "tab3"
                    ? tab3.map((item) => {
                        return (
                            <OurPrograms
                                alt={item.alt}
                                description={item.Description}
                                img={item.img}
                                name={item.name}
                                room={item.room}
                                time={item.time}
                                title={item.title}
                                key={item.id}
                            />
                        );
                    })
                    : tab1.map((item) => {
                        return (
                            <OurPrograms
                                alt={item.alt}
                                description={item.Description}
                                img={item.img}
                                name={item.name}
                                room={item.room}
                                time={item.time}
                                title={item.title}
                                key={item.id}
                            />
                        );
                    })}
        </>
    );
}

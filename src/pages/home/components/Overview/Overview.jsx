import React from "react";
import { OverviewContainer, OverviewWrapper } from "./style";
import Data from "../../../../design-system/components/Overview/Data";
import OverviewComponent from "./../../../../design-system/components/Overview/Overview";
export default function Overview() {
    return (
        <OverviewWrapper>
            <div className="container">
                <OverviewContainer>

                {Data.map((item) => {
                    return (
                        <OverviewComponent
                        title={item.title}
                        key={item.id}
                        Desc={item.Description}
                        icon={item.icon}
                        />
                        );
                    })}
                    </OverviewContainer>
            </div>
        </OverviewWrapper>
    );
}

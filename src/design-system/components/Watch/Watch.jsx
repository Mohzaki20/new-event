import React from 'react'
import { WatchWrapper, Span ,P } from '../Watch/style';

export default function Watch() {
    return (
        <div className="container">
        <WatchWrapper>
            <div style={{flex:"1"}}>
                <Span>WATCH VIDEO</Span>
                <P>
                Quisque facilisis scelerisque venenatis. Nam vulputate ultricies
                    luctus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet.
                </P>
                <P>
                    Quisque facilisis scelerisque venenatis. Nam vulputate ultricies
                    luctus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet.
                </P>
            </div>
            <div style={{flex:"1"}}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UY9KyLu6uUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div >
        </WatchWrapper>
    </div>
    )
}

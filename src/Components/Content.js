import React from 'react'
import './css/Content.css';
import ContentComponent from './ContentComponent.js';
function Content() {


    const cont = [
        {
            title: 'Enjoy on your TV.',
            text:'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
            imgUrl:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        },
        {
            title: 'Download your shows to watch on the go.',
            text: 'Save your data and watch all your favorites offline.',
            imgUrl:
                'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
        },
        {
            title: 'Watch everywhere.',
            text:
                'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
            imgUrl:
                'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png',
        }
    ];

    return (
        <div className  = "content_container">
            {
                cont.map((c,idx)=>{
                    return <ContentComponent
                        key={c.title}
                        title = {c.title}
                        text = {c.text}
                        image = {c.imgUrl}
                        side = {(idx%2===0)?'right':'left'}
                    />
                })
            }      
        </div>
    )
}

export default Content;

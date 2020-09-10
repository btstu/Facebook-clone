import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
       <div className="storyReel">
           <Story
           image="https://i.redd.it/ukqpbg7a4zk51.png"
           profileSrc="https://i.redd.it/ex8gzozckrk51.png"
           title="Lilly Matthews" />
           <Story
           image="https://i.redd.it/fke9yv828rk51.png"
           profileSrc="https://i.redd.it/c54h4g1c63l51.png"
           title="San Gohan"/>
           <Story
           image="https://i.redd.it/19s9uuqxihl51.jpg"
           profileSrc="https://i.redd.it/snaz5uj3enl51.png"
           title="Shenron"/>
           <Story
           image="https://i.redd.it/gf2rg5wi7jl51.png"
           profileSrc="https://i.redd.it/w0aq0tlg3kl51.png"
           title="Piccolo"/>
           <Story
           image="https://i.redd.it/dd4vubtgpkl51.jpg"
           profileSrc="https://i.redd.it/ozck8zgpqnl51.png"
           title="Piccolo"/>


        </div>
    )
}

export default StoryReel

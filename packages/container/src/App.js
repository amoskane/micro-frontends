import React from 'react'
// import { mount } from 'marketing/MarketingApp'
import MarketingApp from './components/MarketingApp'
// console.log(mount);

export default () => {
  return <div>
    <h1>Hi There!</h1>
    <hr />
    <MarketingApp />
  </div>
}


// must deploy independently.
// location of each remoteEnty.js must be known.
// must deploy several apps
// ci / CD
// caching issues on remotEntry.js
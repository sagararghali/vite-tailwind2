import React from 'react'
import ImageSlider from './ImageSlider';
import Hovercard from './Hovercard';
import Latest from './Latest';
import Recommend from './Recommend';
import FAQ from './FAQ';
export default function Homebody() {
  return (
    <div>

<ImageSlider/>
<Hovercard/>
<Latest topic="Latest:"/>
<Recommend topic="Recommended for you:"/>
<FAQ/>
    </div>
  )
}

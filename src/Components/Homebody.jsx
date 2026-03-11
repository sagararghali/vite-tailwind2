import React from 'react'
import ImageSlider from './ImageSlider';
import Hovercard from './Hovercard';
import Latest from './Latest';
import Recommend from './Recommend';
import FAQ from './FAQ';
import Price from './Price';
export default function Homebody() {
  return (
    <div>

<ImageSlider/>
<Hovercard/>
<Latest topic="Latest:"/>
<Recommend topic="Recommended for you:"/>
<FAQ/>
<Price/>
    </div>
  )
}

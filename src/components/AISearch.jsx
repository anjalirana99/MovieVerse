import React from 'react'
import AISearchBar from './AISearchBar'
import AISearchRecommendations from './AISearchRecommendations'
import { login_bg_img } from '../utils/constants'

const AISearch = () => {
  return (
    <div>
        <div>
            <img className="h-full w-full object-cover absolute -z-10" src={login_bg_img} alt="bg-img"/>
        </div>
        <AISearchBar/>
        <AISearchRecommendations/>
    </div>
  )
}

export default AISearch
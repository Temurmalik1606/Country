import { useState } from 'react'
import './search.scss'

export function Search({value, setValue, setRegion}){
   const [ regionModal, setRegionModal ] = useState(false)
   const [ regionName, setRegionName ] = useState('Filter by Region')

   const regionsData = ['Filter by Region', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

   function handleRegion(e){
      setRegionModal(false)
      setRegionName(e.target.textContent)
      setRegion(e.target.textContent)
   }

   return(
      <div className='search-filter container'>
         <div className='contents'>
            <form className='inp'>
               <div className='search-border'>
                  <img src='img/search.svg' alt=''/>
                  <input value={value} onChange={(e) => setValue(e.target.value)} type='text' placeholder='Search for a country…'/>
               </div>
            </form>
            <div className='filter' >
               <div className='items' onClick={()=>setRegionModal(!regionModal)}>
                  <span>{regionName}</span>
                  <svg className={regionModal ? 'transform' : ''} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z" fill="white"/>
                  </svg>
               </div>
                  <ul className={regionModal ? 'opacity' : ''}>
                     {
                        regionsData.map((item,ind) => {
                           return <li onClick={(e) => handleRegion(e)} key={ind}>{item}</li>
                        })
                     }
                  </ul>
            </div>
         </div>
      </div>
   )
}
import React,{useEffect,useState} from 'react'

function WindowsTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(()=>{
        function watchWindowWidth(){

            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', watchWindowWidth)

        return () => {
            window.removeEventListener('resize',watchWindowWidth)
        }
    },[])
  return (
    <div>Window width:  {windowWidth} </div>
  )
}

export default WindowsTracker
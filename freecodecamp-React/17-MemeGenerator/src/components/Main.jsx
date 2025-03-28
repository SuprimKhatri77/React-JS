import { useState,useEffect } from "react"

export default function Main() {

    const [meme , setMeme] = useState({
        topText:"One does not simply",
        bottomText: "Walk into Mordor",
        image:{
            url:""
        }
    })

    function handleChange(event){
        const {value, name} = event.currentTarget;
        // console.log(value);
        setMeme(prevMeme => (
            {
                ...prevMeme,
                [name]: value,
            }
        ))
        
    }

    const [allMemes,setAllMemes] = useState([])
    
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then((data)=>{
            setAllMemes(data["data"]["memes"])
            
            // console.log(data["data"]["memes"][0].url);
            
        })
        .catch(error => console.log("error fecthing data", error))
        .finally( () => console.log("the promise is either resolved or rejected."))
        
    },[])
    // console.log(allMemes);

        function getRandomImage(){
            const randomNumber = Math.floor(Math.random() * 100)
            // console.log(randomNumber);
            const randomMemeUrl = allMemes[`${randomNumber}`]["url"]
            // console.log(allMemes[`${randomNumber}`]["url"]);
            
                setMeme(prevMeme => (
                    {
                        ...prevMeme,
                        image: {
                            url: randomMemeUrl
                        }
                    }
                ))
            
        }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getRandomImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.image.url ? meme.image.url : "http://i.imgflip.com/1bij.jpg"} />
                <span className="top"> {meme.topText} </span>
                <span className="bottom"> {meme.bottomText} </span>
            </div>
        </main>
    )
}
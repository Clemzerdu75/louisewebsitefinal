import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Main = () => {
    const [raw, setRaw] = useState([])
    const [gallery, setGallery] = useState([])

    // function importAll(r) {
    //     return r.keys().map(r);
    // }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    useEffect(() => {
        Axios.get(`/getPage?folder=mainImg&page=0}`)
            .then((res) => setRaw(res.data))
    }, [])  

    useEffect(() => {
        let galleries = raw.map((el, index) => 
        {
            let classes = ""
            if (index % 1 === 0) classes = "main1"
            if (index % 2 === 0) classes = "main2"
            if (index % 3 === 0) classes = "main3"
            return  <img key={el} alt="" className={classes} src={el}></img>
        })
        setGallery(shuffle(galleries))
    }, [raw])
    
    
      
    return(
        <div className="picture_div2" style={{marginTop: "0em"}}>
            <div className="main0">
                {gallery}
            </div>
        </div>
    )
}

export default Main
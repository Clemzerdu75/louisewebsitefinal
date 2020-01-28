import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const Pages = (props) => {
    const [content, setContent] = useState([])

    useEffect(() => {
        const keys = Object.keys(props.folders);
        let folder = "";

        for(let key of keys) if(props.folders[key].includes(props.title)) folder = key;

        Axios.get(`/getPage?folder=${folder}&page=${props.title}`)
            .then((res) => setContent(res.data))
    }, [])

    return (
        <div className="picture_div">
            {content.map((el) => <img key={el} alt="" className="img" src={process.env.PUBLIC_URL + el}></img> )}
        </div>
    )
}

export default Pages
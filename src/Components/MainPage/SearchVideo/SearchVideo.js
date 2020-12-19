import React, {useState, useEffect} from 'react'
import SearchVideoList from './SearchVideoList/SearchVideoList'

const SearchVideo = () => {
    const [video, setVideo] = useState([]);
    const [name, setName] = useState('');
    const API_KEY = 'AIzaSyCmqJEj_9OUp86K5zO5cBjiStRY0cr7Hww';
    useEffect(() =>{

    }, [])

    const onChangeName = (e) =>{
        e.preventDefault()
        setName(e.target.value)
    }
    const getVideoInfo = async (e) =>{
        e.preventDefault();
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${name}&type=video&part=snippet`
        );
        const data = await response.json();
            setVideo(data);
    }

    return(
        <div>
        <form onSubmit = {getVideoInfo}>
            <h1>Search Video</h1>
            <input type = 'text' value= {name} onChange = {onChangeName}/>
            <button>Search</button>
        </form>

        </div>
    )
}

export default SearchVideo
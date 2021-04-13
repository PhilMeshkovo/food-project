import {useState, useEffect} from 'react'
import {getAllCategories} from '../api'
import {Preloader} from '../components/Preloader'
import {CategoryList} from '../components/CategoryList'


export function Home(props) {
    const [catalog, setCatalog] = useState([]);

    useEffect (() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
        })
    },[])
    return <>
        {!catalog.length ? <Preloader/> :
        <CategoryList catalog={catalog}/>
        }
    </>
}
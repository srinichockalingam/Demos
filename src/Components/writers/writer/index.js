import React,{Fragment} from 'react'
import {Link, Route} from 'react-router-dom'
import {NotFound} from '../../Errors'
import Texts from './text'

export default ({ match:{url}, id, name, born,texts}) =>
<Fragment>
    <h1>{id}</h1>
    <h2>{name}</h2>
    <p>{born}</p> 
    <ul>
        {texts.map(({id,title})=>
            <li>
                <Link to={`${url}/texts/${id}`}>
                    {title}
                </Link>
            </li>)}
    </ul>
    <Route path={`${url}/texts/:textId`}  render={
        props => {
            const text = texts.find(({id}) => id === props.match.params.textId)

            if (!text){
                return <NotFound/>
            }
            return <Texts {...text}/>
        }
    }/>   
</Fragment>
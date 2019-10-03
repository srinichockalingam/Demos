/* eslint-disable no-template-curly-in-string */
import React,{Fragment} from 'react';
import {Link, Route , Redirect} from 'react-router-dom';
import Writer from './writer';
import {NotFound} from '../Errors'


export default ({ match : {url} , writers }) =>
<Fragment>
    <ul> 
        {writers.map(({id,name}) =>
            <li key={id}>
                <Link to = {`${url}/${id}`}>{name}</Link>
            </li>
        )}
    </ul>
    <Route path = {`${url}/:writerId`} render={
        props => {
            const writer = writers.find(writer => writer.id === props.match.params.writerId)

            if (!writer){
                return <NotFound/>
            }
            return <Writer {...props} {...writer}/>
        }
    }/>
</Fragment>
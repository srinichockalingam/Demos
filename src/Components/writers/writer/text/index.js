import React,{Fragment} from 'react'

export default ({bookid, title, publish}) =>
<Fragment>
    <div>
        <h1>{bookid}</h1>
        <h2>{title}</h2>
        <p>{publish}</p>      
    </div>
</Fragment>
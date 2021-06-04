import React from 'react';

interface Props {
    dataListSkiJumpers?: any
}



function Jumpers(props: Props){
    return(
        <div>
            {props.dataListSkiJumpers}
        </div>
    )
}
export default Jumpers;
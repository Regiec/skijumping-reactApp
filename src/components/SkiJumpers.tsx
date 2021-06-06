import React from 'react';
import { Table } from 'react-bootstrap';

interface Props {
    dataListSkiJumpers?: any
}



function Jumpers(props: Props){
    return(
        <div>
             <Table style={{backgroundColor: "grey"}} striped bordered hover variant="dark">
                 <tbody>
                 <th scope="col">#</th>
                 <th scope="col">Imię</th>
                 <th scope="col">Nazwisko</th>
                 <th scope="col">Wiek</th>
                 <th scope="col">Siła</th>
                 </tbody>
            {props.dataListSkiJumpers}
            </Table>
        </div>
    )
}
export default Jumpers;
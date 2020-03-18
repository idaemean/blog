import React, {Component} from "react"
import Image from 'react-bootstrap/Image'


export default class OMnie extends Component {
    constructor(props){
        super(props);
            }


    render(){
        return(
            <div>
                <Image src="https://cdn.vox-cdn.com/thumbor/PdSSDjg8ferCosSTw3HFpNjwb3E=/0x0:4516x3096/1200x800/filters:focal(1955x325:2677x1047)/cdn.vox-cdn.com/uploads/chorus_image/image/59738317/shutterstock_560342020.0.jpg" alt="Books" width='200' height='100' rounded/>
                <Image src="https://files.logoscdn.com/v1/files/24326590/content.jpg?download=true&signature=1pz7Ne8Q3CHx_64Lyrkgy1ZC7qU" alt="Books" width='200' height='100' rounded/>
            </div>


    )
    }

}

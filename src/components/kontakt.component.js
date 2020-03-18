import React, {Component} from "react"
import Iframe from 'react-iframe'


export default class Kontakt extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div >
                <p> e-mail: xxx.zzzzz@gmail.com</p>
                <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12779.663348705737!2d18.63841097437906!3d54.350889823900815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd731c14d4fa6f%3A0x9bb9fbf163b7be8d!2zR2RhxYRzaw!5e0!3m2!1spl!2spl!4v1584543975473!5m2!1spl!2spl"
                    width="600" height="450" frameBorder="0" style="border:0;" allowFullScreen="" aria-hidden="false"
                    tabIndex="0"/>
            </div>


        )
    }

}
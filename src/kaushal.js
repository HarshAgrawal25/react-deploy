import './components/Kaushal';



import React, { Component } from 'react'

 class kaushal extends Component {
    render() {
        const kaushal = document.querySelectorAll("#kaushal path");

        for(let i=0; i<kaushal.length;i++){
         let  a = (`Letter ${i} is  ${kaushal[i].getTotalLength()}`);
        }
        return (
            <div>
                console.log(a);
            </div>
        )
    }
}

export default kaushal

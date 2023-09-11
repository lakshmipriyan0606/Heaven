import Romeimg from '../img/dest/dest1.jpg' 
import londonimg from '../img/dest/dest2.jpg' 
import europeimg from '../img/dest/dest3.jpg' 
 import {FaPaperPlane} from "react-icons/fa"

const destinationdata = [
    {
        id:1,
        img:Romeimg,
        title : "Rome,Italty",
        price : "$ 5,412",
        icon : `${<FaPaperPlane/>} `,
        days : "10 Days Trip"
    },
    {
        id:2,
        img:londonimg,
        title : "London , UK",
        price : "$ 8,712",
        icon : `${<FaPaperPlane/>} `,
        days : "12 Days Trip"
    },
    {
        id:3,
        img:europeimg,
        title : "Full Europe",
        price : "$ 10,999",
        icon : `${<FaPaperPlane/>} `,
        days : "21 Days Trip"
    },
    {
        id:4,
        img:Romeimg,
        title : "Rome,Italty",
        price : "$ 5,412",
        icon : `${<FaPaperPlane/>} `,
        days : "10 Days Trip"
    }
    
]

export default destinationdata
import React from 'react'
import styles from "./BottomSection.module.css"
import { faPlus,faBookmark,faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import Bookmarks from '../Bookmarks/Bookmarks'; 
import Lottie from "lottie-react";
import chrome from "../../assets/images/lottie/chrome.json"


function BottomSection() {
const [NewBookMark,SetNewBookMark] = React.useState(false)
const ToggleNewState = () =>{
    SetNewBookMark(!NewBookMark)
}
    return (
    <div className={styles.BottomSection} > 
        <div className={styles.BottomSectionBtnDiv}>
            <AddToChromeBtn/>
            <button  className={styles.BottomSectionBtnAddBookmark} onClick={()=>ToggleNewState()} >
            {NewBookMark?
                <span style={{color:"red",}} >Cancel<FontAwesomeIcon
                icon={faTimes}
                className="pt-1 pl-2"
                style={{color:"red",fontSize:"15px"}}
            /> </span>
            : 
                <span>Add Bookmark <FontAwesomeIcon
                icon={faBookmark}
                className="pt-1 pl-1"
                // size="lg"
                style={{color:"#4ab421",fontSize:"15px"}}
            /> </span>
}
            </button>
        </div>
        <div className={styles.BookmarkMainSection}>
                <Bookmarks closeAddNewBookmark={ToggleNewState} addNew={NewBookMark} />
                </div>
    </div>
  )
}

export default BottomSection

export const AddToChromeBtn = ({style,Navbar}) =>{
    return(
        <>
        <button className={ Navbar ?   styles.BottomSectionBtnAddToChromeNavBar  :styles.BottomSectionBtnAddToChrome} style={style} >
            <Lottie animationData={chrome} loop={true} style={Navbar?{width:40} : {width:50}} />
           <span style={{fontWeight:"bold"}} >Add to Chrome</span>
            </button>
            </>
    )
}
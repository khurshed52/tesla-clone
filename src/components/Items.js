import React from 'react'
import './Items.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Footer from './Footer'
const Items = ({background, title, desc, twoBtn, leftBtnName, rightBtnName, first, footer})=> {
    return (
            <div className="items_bg" style={{backgroundImage: `url(${background})`}} >
                 <div className="item_title">
                     <h3> {title}</h3>
                     <p>{desc} </p>
                 </div>
                     <div className="btn_container">
                     <div className="item_btn">
                        {
                            twoBtn && (
                               <>
                                <button className="order"> {leftBtnName}</button>
                                <button className="learn"> {rightBtnName}  </button>
                               </>
                            )
                        }

                        {
                            !twoBtn && (
                                <>
                                 <button className="shop"> Show Now </button>
                                </>
                            )
                        }
                       
                        {first && (
                                 <div className="center">
                                 <svg width="40" height="90" viewBox="0 0 50 130">
                                   <rect id="scroll" x="0" y="5" rx="25" ry="25" width="50" height="80" stroke="#FFF" fill="none" strokeWidth="2"></rect>
                                   <circle id="circle--shape" cx="25" cy="32" r="8" fill="#fff"></circle>
                                 </svg>
                               </div>
                            )}
                     </div>
                </div> 
            </div> 
    )
}

export default Items

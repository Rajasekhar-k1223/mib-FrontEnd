import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
function GetNotifications({data}) {
    console.log(data)
  return (
    <div className='getNotification_frd_request_body'>
    <AiFillCloseCircle className='notifi_close'/>
    <div className='getNotification_frd_request'>{data.senderName}
    <p>{data.type}</p>
    </div>
    </div>
  )
}

export default GetNotifications
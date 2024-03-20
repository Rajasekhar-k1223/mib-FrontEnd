import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import social from "../assets/images/5551.jpg";
import mails from "../assets/images/64666.jpg";
import gifsrc1 from "../assets/images/transistor-fast-delivery-1.gif";
import gifsrc2 from "../assets/images/dazzle-team-celebrating-success-of-a-work-project.gif";
export default function AlbumLoad() {
  // {uploads,sheets,templateModel}
  const [pageCount,setpageCount] = useState([1,2,3,4,5,6,7,8,9,10]);
  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="albumPage" ref={ref} >
        {" "}
        <img src={props.data} className="album2x" />
        <img src={props.data} className="album2x" />
        <img src={props.data} className="album2x" />
        <img src={props.data} className="album2x" />
        <img src={props.data} className="album2x" />
        
        {/* <h1>Page Header</h1> */}
        {/* <p>{props.children}</p>
        <p>Page number: {props.number}</p> */}
      </div>
    );
  });

  return (
    <HTMLFlipBook width={555} height={650} className="ablum">
      {/* <div className="demoPage">Page 1</div>
      <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div> */}
      {pageCount.map((item)=>{

        return <Page number="1" data={social}>
              Page text
            </Page>
      })}
      
      {/* <Page number="2" data={mails}>
        Page text
      </Page>
      <Page number="3" data={gifsrc1}>
        Page text
      </Page>
      <Page number="4" data={gifsrc2}>
        Page text
      </Page> */}
    </HTMLFlipBook>
  );
}

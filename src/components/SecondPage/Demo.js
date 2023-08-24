import React from "react";
import { useState } from "react";


function Demo() {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [link, setLink] = useState(false);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      console.log(position)
    };
  
    const birthDayArray = [
      {
        title: 'H',
        color: 'violet',
      },
      {
        title: 'A',
        color: 'indigo',
      },
      {
        title: 'P',
        color: 'blue',
      },
      {
        title: 'P',
        color: 'green',
      },
      {
        title: 'Y',
        color: 'yellow',
      },
      {
        title: 'B',
        color: 'orange',
      },
      {
        title: 'I',
        color: 'red',
      },
      {
        title: 'R',
        color: 'violet',
      },
      {
        title: 'T',
        color: 'indigo',
      },
      {
        title: 'H',
        color: 'blue',
      },
      {
        title: 'D',
        color: 'green',
      },
      {
        title: 'A',
        color: 'yellow',
      },
      {
        title: 'Y',
        color: 'orange',
      },
      {
        title: 'P',
        color: 'red',
      },
      {
        title: 'R',
        color: 'violet',
      },
      {
        title: 'A',
        color: 'indigo',
      },
      {
        title: 'G',
        color: 'blue',
      },
      {
        title: 'Y',
        color: 'green',
      },
      {
        title: 'A',
        color: 'yellow',
      },
    ];

  return (
    <div className="Demo">
 <div id='birthdayButton'
          style={{

            height: '650px',
            // width:'100%'
            border: '1px solid black',
            padding: "10px"
          }}
          onMouseMove={handleMouseMove}
        >
          {birthDayArray.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: item.color,
                boxSizing: 'border-box',
                border: '1px solid black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
              }}
            >
              {item.title}
            </div>
          ))}

        </div>
        <div  className="heart-shape"
          style={{
            position: 'absolute',
            left: `${position.x + 50}px`,
            top: `${position.y + 50}px`,
          }} 
          //onMouseMove={handleMouseMove} 
          >
          </div>
          {
            link ? <a href="https://www.youtube.com/watch?v=_z-1fTlSDF0" >Click here For My Wish cutieee Pie</a> :<div></div>
          }
<div style={{ display: 'grid', placeItems: 'center', height: '100vh' }} onClick={()=>{setLink(true)}}>
  <button style={{ width: '500px', height: '60px' }}>
    CLICK HERE BABE
  </button>
</div>

    </div>
  );
}

export default Demo;
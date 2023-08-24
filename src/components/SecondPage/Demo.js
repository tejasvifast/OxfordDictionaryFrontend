import React from "react";
import { useState } from "react";
import You from '../../images/You.png'
import Photo1 from '../../images/photo1.png'
import Photo2 from '../../images/photo2.png'
import Photo3 from '../../images/photo3.png'
import Photo4 from '../../images/photo4.png'



function Demo() {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [link1, setLink1] = useState(false);
    const [link2, setLink2] = useState(false);
    const [link3, setLink3] = useState(false);

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
        <div className="Demo"
            onMouseMove={handleMouseMove}
            style={{ margin: '5%' }}>
            {!link3 && <div style={{ paddingLeft: '10%', display: 'flex', placeItems: 'center', height: '30vh' }} >
                <button style={{ width: '500px', height: '100px', backgroundColor: 'lightblue' }} onClick={() => { setLink3(true) }}>
                <p>&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;</p>
                    CLICK HERE BABE :D
                    <p>&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;&#128536;</p>
                </button>
            </div>}
            {link3 && <div id='birthdayButton'
                style={{

                    height: '650px',
                    // width:'100%'
                    border: '1px solid black',
                    padding: "10px",
                    textAlign:'center'
                }}
            // onMouseMove={handleMouseMove}
            >
                For You Babu With Deep Heart..... Miss You .... Hate You ( You Know Well Opposite of Hate  ) <p>&#128538;&#128538;&#128538;&#128538;&#128149;&#128538;&#128538;&#128538;&#128538;</p>
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

            </div>}

            <div className="heart-shape"
                style={{
                    position: 'absolute',
                    left: `${position.x + 50}px`,
                    top: `${position.y + 50}px`,
                }}
            >
            </div>

            {link1 && link3 && <div style={{ display: 'flex', overflowY: 'auto' }}>
                <img style={{ width: '300px', margin: '10px', flex: '0 0 auto' }} src={Photo1} alt="ge 1" />
                <img style={{ width: '300px', margin: '10px', flex: '0 0 auto' }} src={Photo2} alt="ge 2" />
                <img style={{ width: '300px', margin: '10px', flex: '0 0 auto' }} src={You} alt="ge 3" />
                <img style={{ width: '300px', margin: '10px', flex: '0 0 auto' }} src={Photo3} alt="ge 4" />
                <img style={{ width: '300px', margin: '10px', flex: '0 0 auto' }} src={Photo4} alt="ge 5" />
            </div>}

            {
                link2 && <div style={{ backgroundColor: 'pink', height: '100px' }}><a href="https://www.youtube.com/watch?v=_z-1fTlSDF0" >Click here For My Wish cutieee Pie</a>  wish you very very happy birthday babu ,,,,,,,cuchu muchu ......jaldi jaldi mai itna hi hua babu....miss u alot ..... have a bright future cuchu puchu</div>
            }
            {
                link2 && <div style={{ backgroundColor: 'pink', height: '100px', marginTop: '20px' }}><a href="https://www.youtube.com/watch?v=2Vv-BfVoq4g" >Dedicated Song For You Cuchu</a> </div>
            }
            {link3 && <div style={{ paddingLeft: '15%', display: 'flex', placeItems: 'center', height: '30vh', paddingRight: '15%' }} >
                <button style={{ width: '500px', height: '60px', backgroundColor: 'lightpink' }} onClick={() => { setLink1(true) }}>
                    Want To See Memories
                </button>
                <button style={{ marginLeft: '30px', width: '500px', height: '60px', backgroundColor: 'lightblue' }} onClick={() => { setLink2(true) }}>
                    Some Dedicated Words With Links :D
                </button>
            </div>}

        </div>
    );
}

export default Demo;
import React, { useEffect } from "react";

export default function DomManipulation() {
  console.log(document.getElementById("title"));
  const aa = document.getElementsByClassName("testing");
  const ps = document.getElementsByTagName("p");
  const element = document.querySelectorAll(".testing");
  console.log(element);

  useEffect(() => {
    for (let index = 0; index < ps.length; index++) {
      const element = ps[index];
      element.style.background = "red";
    }
    // for (let index = 0; index < aa.length; index++) {
    //   const element = aa[index];
    //   element.style.background = "red";
    // }
  }, [ps]);

  useEffect(() => {
    const spanEl = document.createElement('span')
    spanEl.innerText = "This is span tag"
    console.log(spanEl);

    spanEl.addEventListener('mouseover', () => {
        console.log('hovered');
        
    })

    document.getElementById('container').appendChild(spanEl)

    setTimeout(() => {
        console.log('two seconds passed');
        
    }, 2000);

    setInterval(() => {
        console.log('one second passed');
        
    }, 1000);
    
  }, []);

  const removeEvent = () => {  
    const spanEl = document.querySelector('#container span')
    console.log(spanEl);
    
    spanEl.removeEventListener('mouseover', () => {
        console.log('hovered removed');
        
    })
   }

  return (
    <div id="container">
      <p className="testing">ddddd</p>
      <button onClick={removeEvent}>Remove event</button>
    </div>
  );
}

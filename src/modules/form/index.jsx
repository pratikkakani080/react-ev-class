import React from 'react'

export default function Form() {
    return (
        <div>
            <p onClick={() => {
                console.log('sdfsdfdsfs')
            }}>test</p>
            <input type='text' name='firstName' placeholder='please enter' onChange={(ev) => {
                console.log(ev.target.name, ev.target.value);

            }} onKeyDown={(e) => {
                console.log(e);
                if (e.key === 'Tab') {
                    console.log(document.getElementsByName('lastName'));

                    document.getElementsByName('lastName')[0].focus()
                }
            }} />
            <input type='text' name='lastName' placeholder='please enter' onChange={(ev) => {
                console.log(ev.target.name, ev.target.value);

            }} onKeyDown={(e) => {
                console.log(e);
                if (e.key === 'Tab') {
                    // console.log(document.getElementsByName(''));

                    document.getElementById('submit').focus()
                }
            }} />
            <input type='checkbox' name='isApply' placeholder='please enter' onChange={(ev) => {
                console.log(ev.target.name, ev.target.checked);

            }} />
            <select onChange={(ev) => {
                console.log(ev.target.value);

            }}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
            <button id='submit' onClick={(ev) => {
                console.log(ev);
            }}>CLick me</button>
        </div>
    )
}

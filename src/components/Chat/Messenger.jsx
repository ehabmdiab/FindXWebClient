import React from "react";
import "./Messenger.scss";
import {converstions} from './chatdummydata';
import {useState} from 'react';
export default function Messenger() {

let [convs,setconvs] = useState(converstions)

    let populateContact = ()=>{
   return convs.map((conv)=>{
   let SenderFullName = conv.receiver.firstName + " " + conv.receiver.lastName; 
   let lastMessage = conv.messages[conv.messages.length - 1];
   let lastMessageTime = lastMessage.sendDate.split("T")[1].slice(0,5);
   
   return (
    <li className="person" data-chat="perosn1" key={conv._id}>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg" alt="" />
    <span className="name">{SenderFullName }</span>
    <span className="time">{lastMessageTime}</span>
    <span className="preview">{lastMessage.content}</span>
   </li>
   )
    })
    }



    return (<>

<div className="wrapper">
    <div className="container">
        <div className="left">
            <div className="top">
                <input type="text" placeholder="Search" />
              
            </div>
            <ul className="people">
                {populateContact()}
            </ul>
        </div>
        <div className="right">
            <div className="top"><span>To: <span className="name">Dog Woofson</span></span></div>
            <div className="chat" data-chat="person1">
                <div className="conversation-start">
                    <span>Today, 6:48 AM</span>
                </div>
                <div className="bubble you">
                    Hello,
                </div>
                <div className="bubble you">
                    it's me.
                </div>
                <div className="bubble you">
                    I was wondering...
                </div>
            </div>
            <div className="chat" data-chat="person2">
                <div className="conversation-start">
                    <span>Today, 5:38 PM</span>
                </div>
                <div className="bubble you">
                    Hello, can you hear me?
                </div>
                <div className="bubble you">
                    I'm in California dreaming
                </div>
                <div className="bubble me">
                    ... about who we used to be.
                </div>
                <div className="bubble me">
                    Are you serious?
                </div>
                <div className="bubble you">
                    When we were younger and free...
                </div>
                <div className="bubble you">
                    I've forgotten how it felt before
                </div>
            </div>
            <div className="chat" data-chat="person3">
                <div className="conversation-start">
                    <span>Today, 3:38 AM</span>
                </div>
                <div className="bubble you">
                    Hey human!
                </div>
                <div className="bubble you">
                    Umm... Someone took a shit in the hallway.
                </div>
                <div className="bubble me">
                    ... what.
                </div>
                <div className="bubble me">
                    Are you serious?
                </div>
                <div className="bubble you">
                    I mean...
                </div>
                <div className="bubble you">
                    It’s not that bad...
                </div>
                <div className="bubble you">
                    But we’re probably gonna need a new carpet.
                </div>
            </div>
            <div className="chat" data-chat="person4">
                <div className="conversation-start">
                    <span>Yesterday, 4:20 PM</span>
                </div>
                <div className="bubble me">
                    Hey human!
                </div>
                <div className="bubble me">
                    Umm... Someone took a shit in the hallway.
                </div>
                <div className="bubble you">
                    ... what.
                </div>
                <div className="bubble you">
                    Are you serious?
                </div>
                <div className="bubble me">
                    I mean...
                </div>
                <div className="bubble me">
                    It’s not that bad...
                </div>
            </div>
            <div className="chat" data-chat="person5">
                <div className="conversation-start">
                    <span>Today, 6:28 AM</span>
                </div>
                <div className="bubble you">
                    Wasup
                </div>
                <div className="bubble you">
                    Wasup
                </div>
                <div className="bubble you">
                    Wasup for the third time like is <br />you blind bitch
                </div>

            </div>
            <div className="chat" data-chat="person6">
                <div className="conversation-start">
                    <span>Monday, 1:27 PM</span>
                </div>
                <div className="bubble you">
                    So, how's your new phone?
                </div>
                <div className="bubble you">
                    You finally have a smartphone :D
                </div>
                <div className="bubble me">
                    Drake?
                </div>
                <div className="bubble me">
                    Why aren't you answering?
                </div>
                <div className="bubble you">
                    howdoyoudoaspace
                </div>
            </div>
            <div className="write">

                <input type="text" />

            </div>
        </div>
    </div>
</div>
    </>)
}
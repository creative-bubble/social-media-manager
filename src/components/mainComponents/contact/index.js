import React from 'react';
import Input from '../../miniComponents/input';

function Contact(){
    return(
        <div class="h-100 mt-6 sm:mt-0">
        <div class="relative sm:w-9/12 h-full flex flex-col mx-auto">
          <br class="sm:hidden" />
          <div class="w-full h-101 mx-auto md:absolute md:left-0 md:w-8/12 md:h-88">
                <div class="w-9/12 h-56 mx-auto">
                    <div class="relative h-16 sm:h-20 flex justify-center sm:justify-start">
                        <h2 class="absolute mt-6 font-semibold text-blue-500">CONTACT US</h2>
                    </div>
              
                    <p class="text-xs font-semibold text-blue-500">Drop a message</p>
                    <Input placeholder="Full Name*"></Input>
                    <Input placeholder="Email*"></Input>
                    <Input placeholder="Phone*"></Input>
                    <Input placeholder="Subject*"></Input>
                    <textarea class="w-full mt-3 rounded-sm border border-gray-400 focus:outline-none focus:border-blue-500"  placeholder="Message*"></textarea>
                    <button class="w-full h-8 mt-4 text-xs rounded-full bg-blue-500 text-gray-200 tracking-wider focus:outline-none active:bg-blue-400 ">SUBMIT</button>
              </div>
          </div>
          <div class="w-full h-2 mx-auto hidden md:block md:absolute md:right-0 md:w-4/12 md:h-88">
              <img class="sm:absolute h-full w-full object-contain" src={require("../../../img/contact.svg")} alt="media1" />
          </div>
        </div>
      </div>
    )
}

export default Contact;
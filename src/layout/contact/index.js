import React from 'react';
import Input from '../../elements/input';

function Contact(){
    return(
        <div className="container-xl mt-6 pb-20 sm:mt-0">
            <div className="relative sm:w-9/12 mx-auto flex flex-col md:flex-row">
                <br className="sm:hidden" />
                <div className=" w-full md:w-6/12">
                    <div className="w-9/12 mx-auto">
                        <div className="relative h-16 sm:h-20 flex justify-center sm:justify-start">
                            <h2 className="absolute mt-6 font-semibold text-blue-500">CONTACT US</h2>
                        </div>
                
                        <p className="text-xs font-semibold text-blue-500">Drop a message</p>
                        <Input className="Full Name*"></Input>
                        <Input className="Email*"></Input>
                        <Input className="Phone*"></Input>
                        <Input className="Subject*"></Input>
                        <textarea className="w-full h-40 mt-3 rounded-sm border border-gray-400 focus:outline-none focus:border-blue-500"  placeholder="Message*"></textarea>
                        <button className="w-full h-8 mt-4 text-xs rounded-full bg-blue-500 text-gray-200 tracking-wider focus:outline-none active:bg-blue-400 ">SUBMIT</button>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 w-6/12 h-64 mx-auto hidden md:block">
                      <img className="h-full w-full object-contain" src={require("../../img/contact.svg")} alt="media1" />
                </div>
            </div>
      </div>
    )
}

export default Contact;
import React from 'react';

function Footer(){
    return(
        <footer className="container-xl w-full h-48 bg-gray-900"> 
            <div className="w-9/12 mx-auto"> 
                <div className="relative h-48">
                    <div className="absolute w-full h-32 mt-0 pt-6 text-xs text-gray-200 lg:w-8/12 lg:h-40 lg:text-md leading-loose">
                        <div className="flex flex-row">
                            <div><span className="font-bold">|</span> <span className="font-bold"> Contact Info</span></div>
                            <div>
                                <i className="fa fa-instagram text-green-500 px-2" aria-hidden="true"></i>
                                <i className="fa fa-facebook-official text-green-500 px-2" aria-hidden="true"></i>
                                <i className="fa fa-twitter-square text-green-500 px-2" aria-hidden="true"></i>
                                <i className="fa fa-twitch text-green-500 px-2" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <div><i className="fa fa fa-envelope text-green-500 pr-1" aria-hidden="true"></i> media@gmail.com</div>
                                <div><i className="fa fa-phone-square text-green-500 pr-1" aria-hidden="true"></i> +63(999)037-1921</div>
                                <div><i className="fa fa fa-compass text-green-500 pr-2" aria-hidden="true"></i> Metro Manila</div>
                            </div>
                            <div>
                                <div><i className="fa fa-facebook-official text-green-500 pr-1" aria-hidden="true"></i> Social Media</div>
                                <div><i className="fa fa-twitter-square text-green-500 pr-1" aria-hidden="true"></i> @Social Media</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
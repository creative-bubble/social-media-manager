import React from 'react';

function Footer(){
    return(
        <div class="bg-gray-900">
            <div class="w-9/12 mx-auto">
                <div class="relative h-48">
                    <div class="absolute w-full h-32 mt-0 pt-6 text-xs text-gray-200 lg:w-8/12 lg:h-40 lg:text-md leading-loose">
                        <div class="flex flex-row">
                            <div><span class="font-bold">|</span> <span class="font-bold"> Contact Info</span></div>
                            <div>
                                <i class="fa fa-instagram text-green-500 px-2" aria-hidden="true"></i>
                                <i class="fa fa-facebook-official text-green-500 px-2" aria-hidden="true"></i>
                                <i class="fa fa-twitter-square text-green-500 px-2" aria-hidden="true"></i>
                                <i class="fa fa-twitch text-green-500 px-2" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <div>
                                <div><i class="fa fa fa-envelope text-green-500 pr-1" aria-hidden="true"></i> media@gmail.com</div>
                                <div><i class="fa fa-phone-square text-green-500 pr-1" aria-hidden="true"></i> +63(999)037-1921</div>
                                <div><i class="fa fa fa-compass text-green-500 pr-2" aria-hidden="true"></i> Metro Manila</div>
                            </div>
                            <div>
                                <div><i class="fa fa-facebook-official text-green-500 pr-1" aria-hidden="true"></i> Social Media</div>
                                <div><i class="fa fa-twitter-square text-green-500 pr-1" aria-hidden="true"></i> @Social Media</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
import React from 'react';
import Card from '../../components/card';

function Home(){
    return(
        <>
        <div class="h-88 bg-gray-900">
            <div class="w-9/12 mx-auto relative">
                <div class="text-3xl sm:text-4xl font-Bebas pt-12">
                    <div class="pt-12 flex flex-col  text-gray-200 w-full text-center lg:text-left">
                        <span>Easy Distributed Post</span>
                        <span>On Multimedia Platforms</span>
                        <div>
                            <button class="w-8/12 mt-10 lg:w-4/12 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-200">GET STARTED</button>
                        </div>
                    </div>
                </div>
                <div class="w-5/12 h-76 absolute right-0 top-0 hidden lg:block md:mt-10">
                    <img class="object-containt" src={require("../../img/img1.svg")} alt="media2" />
                </div>
            </div>
        </div> {/* End of CTO */}
        <div class="mt-1 lg:mt-48">
            <div class="w-9/12 mx-auto">
                <div class="flex justify-center pt-12">
                    <h2 class="font-Bebas text-2xl text-purple-900">Our Services</h2>
                </div>
                <div class="mt-2 flex flex-col sm:flex-row sm:justify-around sm:mt-6 ">
                    <Card>
                        <img class="sm:absolute h-full w-full object-contain" src={require("../../img/1imgService.svg")} alt="media1" />
                    </Card>
                    <Card>
                        <img class="sm:absolute h-full w-full object-contain" src={require("../../img/2imgService.svg")} alt="media1" />
                    </Card>
                    <Card>
                        <img class="sm:absolute h-full w-full object-contain" src={require("../../img/3imgService.svg")} alt="media1" />
                    </Card>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
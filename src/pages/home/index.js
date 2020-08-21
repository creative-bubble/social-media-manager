import React from 'react';
import Card from '../../elements/card/index';
import Contact from '../../layout/contact/index';
import Footer from '../../layout/footer/index';
import Navbar from '../../layout/navbar/index';

function Home(){
    return(
        <>
            <Navbar />
            <div id="main-content" className="min-h-screen">
                <section className="container-xl bg-gray-900">
                    <div className="h-88 ">
                        <div className="w-9/12 mx-auto relative">
                            <div className="text-3xl sm:text-4xl font-Bebas pt-12">
                                <div className="pt-12 flex flex-col  text-gray-200 w-full text-center lg:text-left">
                                    <span>Easy Distributed Post</span>
                                    <span>On Multimedia Platforms</span>
                                    <div>
                                        <button className="w-8/12 mt-10 lg:w-4/12 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-200">GET STARTED</button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-5/12 h-76 absolute right-0 top-0 hidden lg:block md:mt-10">
                                <img className="object-contain" src={require("../../img/img1.svg")} alt="media2" />
                            </div>
                        </div>
                    </div> {/* End of CTO */}
                </section>

                <section className="container-xl">
                    <div className="mt-1 md:mt-8 lg:mt-32">
                        <div className="w-9/12 mx-auto">
                            <div className="flex justify-center pt-12 sm:pt-0">
                                <h2 className="font-Bebas text-2xl text-purple-900">Our Services</h2>
                            </div>
                            <div className="mt-2 flex flex-col sm:flex-row sm:justify-around sm:mt-6 ">
                                <Card>
                                    <img className="sm:absolute h-full w-full object-contain" src={require("../../img/1imgService.svg")} alt="media1" />
                                </Card>
                                <Card>
                                    <img className="sm:absolute h-full w-full object-contain" src={require("../../img/2imgService.svg")} alt="media1" />
                                </Card>
                                <Card>
                                    <img className="sm:absolute h-full w-full object-contain" src={require("../../img/3imgService.svg")} alt="media1" />
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                <Contact />
            </div>
            <Footer />
        </>
    )
}

export default Home;
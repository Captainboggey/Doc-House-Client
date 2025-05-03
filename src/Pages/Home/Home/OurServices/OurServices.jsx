import React from 'react';
import ser1 from "../../../../assets/home/service.jpg"
import d1 from "../../../../assets/home/d1.jpg"
import d2 from "../../../../assets/home/d2.jpg"
import d3 from "../../../../assets/home/d3.jpg"

const OurServices = () => {
    return (
        <div className=' lg:flex  mx-24 my-20 gap-10'>
            <div>
                <img src={ser1} className='w-[1053px]' alt="" />
            </div>
            <div>
                <p><span className='text-3xl font-bold'>Our Services</span><br /> <br />Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className='mt-10'>
                    <div role="tablist" className="tabs tabs-lifted ">
                        <input type="radio" name="my_tabs_2" role="tab" className="tab hover:bg-orange-400" aria-label="Cavity Protection" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <div>
                                <img src={d1} className='lg:h-[350px] w-[558px]' alt="" />
                            </div>
                            <div className='mt-10'>
                                <span className='text-2xl'>Cavity Protection</span><br />

                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p><br />
                                <p>
                                Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                            </div>
                        </div>

                        <input
                            type="radio"
                            name="my_tabs_2"
                            role="tab"
                            className="tab hover:bg-orange-400"
                            aria-label="Cosmetic Dentisty"
                            defaultChecked />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 ">
                            <div>
                                <img src={d2} alt="" className='lg:h-[350px] lg:w-[558px]' />
                            </div>
                            <div className='mt-10'>
                                <span className='text-2xl'>Cosmetic Dentisty</span><br />

                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p><br />
                                <p>
                                Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                            </div>
                        </div>

                        <input type="radio" name="my_tabs_2" role="tab " className="tab hover:bg-orange-400" aria-label="Oral Surgery" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 ">
                            <div>
                                <img src={d3} alt=""  className='lg:h-[350px] lg:w-[558px]'/>
                            </div>
                            <div className='mt-10'>
                                <span className='text-2xl'>Oral Surgery</span><br />

                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p><br />
                                <p>
                                Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default OurServices;
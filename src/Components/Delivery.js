import React from 'react';
import RestaurantCard from './RestaurantCard';

const Delivery = (props) => {

    return (
        <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div class="relative mx-12 lg:max-w-7xl">
                <div>
                    <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                        Food Delivery in Salt Lake
                    </h2>
                </div>
                <div class="mt-12 grid gap-16 border-t-2 border-gray-100 pt-12 lg:grid-cols-3 lg:col-gap-5 lg:row-gap-12">
                    <RestaurantCard
                        name="McDonald's"
                        deliveryTime="20-30 min"
                        deliveryFee="$4.99"
                    />
                    <RestaurantCard
                        name="McDonald's"
                        deliveryTime="20-30 min"
                        deliveryFee="$4.99"
                    />
                    <RestaurantCard
                        name="McDonald's"
                        deliveryTime="20-30 min"
                        deliveryFee="$4.99"
                    />
                </div>
            </div>
        </div>
    );
};

export default Delivery;
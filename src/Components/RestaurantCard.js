import React from 'react';

const RestaurantCard = ({name, deliveryTime, deliveryFee}) => {

    return (
        <div>
            <div class="flex-shrink-0">
                <img
                    class="h-48 w-full object-cover"
                    src={process.env.PUBLIC_URL + '/mcdonalds.jpg'}
                    alt="" />
            </div>
            <a className="mt-4" href="#" className="block">
                <h3 className="mt-4 text-xl leading-7 font-semibold text-gray-900">
                    {name}
                </h3>
                <p className="mt-3 text-base leading-6 text-gray-500">
                    $ &middot; American &middot; Fast Food &middot; Burgers
                </p>
            </a>
            <div className="mt-4 space-x-2">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800">
                    {deliveryTime}
                </span>
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800">
                    {deliveryFee} Delivery Fee
                </span>
            </div>
        </div>
    );
};

export default RestaurantCard;
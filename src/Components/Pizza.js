import React from 'react';

const Pizza = (props) => {

    return (
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form className="mt-8">
                    <div>
                        <label htmlFor="pizzaSize" className="block text-sm leading-5 font-medium text-gray-700">Pizza Size</label>
                        <select id="pizzaSize" className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    </div>
                    <div class="flex items-center mt-4">
                        <input id="cheese" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                        <label htmlFor="cheese" className="ml-2 block text-sm leading-5 text-gray-900">
                            Cheese?
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="pepperoni" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                        <label htmlFor="pepperoni" className="ml-2 block text-sm leading-5 text-gray-900">
                            Pepperoni?
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="mushrooms" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                        <label htmlFor="mushrooms" className="ml-2 block text-sm leading-5 text-gray-900">
                            Mushrooms?
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input id="sauce" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                        <label htmlFor="sauce" className="ml-2 block text-sm leading-5 text-gray-900">
                            Sauce?
                        </label>
                    </div>
                    <div className="mt-4">
                        <label for="specialInstructions" class="block text-sm font-medium leading-5 text-gray-700">Special Instructions</label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <input
                                id="specialInstructions"
                                class="form-input block w-full sm:text-sm sm:leading-5"
                                placeholder="Anything you would like to add?"
                            />
                        </div>
                    </div>
                    <div class="mt-6">
                        <span class="block w-full rounded-md shadow-sm">
                            <button
                                type="submit"
                                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                            >
                                Add to Order
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Pizza;
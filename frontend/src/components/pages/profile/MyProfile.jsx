import {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectUser} from "../../../store/userSlice.js";

const MyProfile = () => {

    const userData = useSelector(selectUser)

    useEffect(() => {
        import('flowbite').then((module) => {
            const {initFlowbite} = module;
            initFlowbite();
        });
    }, []);

    return (
        <section>
            <div className="mx-auto max-w-screen-lg px-4 2xl:px-0 py-2 md:py-16">
                <div className="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
                    <div className="space-y-4">
                        <div className="flex space-x-4">
                            <img className="h-16 w-16 rounded-lg object-cover"
                                 src={`http://localhost:8000/storage/${userData.user.profile_image}`}
                                 alt="Helene avatar"/>
                            <div>
                                <span
                                    className="mb-2 inline-block rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300"></span>
                                <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">{userData.user.name}</h2>
                            </div>
                        </div>
                        <dl className="">
                            <dt className="font-semibold text-gray-900 dark:text-white">Email</dt>
                            <dd className="text-gray-500 dark:text-gray-400">{userData.user.email}</dd>
                        </dl>
                        <dl>
                            <dt className="font-semibold text-gray-900 dark:text-white">Home Address</dt>
                            <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                                <svg className="hidden h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 lg:inline"
                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                                </svg>
                                2 Miles Drive, NJ 071, New York, United States of America
                            </dd>
                        </dl>
                        <dl>
                            <dt className="font-semibold text-gray-900 dark:text-white">Delivery Address</dt>
                            <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                                <svg className="hidden h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 lg:inline"
                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                                </svg>
                                9th St. PATH Station, New York, United States of America
                            </dd>
                        </dl>
                    </div>
                    <div className="space-y-4">
                        <dl>
                            <dt className="font-semibold text-gray-900 dark:text-white">Numere mele:</dt>
                            {userData.user.number_plates.map((number) => (
                                <dd key={number.id} className="text-gray-500 dark:text-gray-400">{number.number}</dd>
                            ))}
                        </dl>
                        <dl>
                            <dt className="mb-1 font-semibold text-gray-900 dark:text-white">Payment Methods</dt>
                            <dd className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                                <div
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                                    <img className="h-4 w-auto dark:hidden"
                                         src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                                         alt=""/>
                                    <img className="hidden h-4 w-auto dark:flex"
                                         src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
                                         alt=""/>
                                </div>
                                <div>
                                    <div className="text-sm">
                                        <p className="mb-0.5 font-medium text-gray-900 dark:text-white">Visa ending
                                            in 7658</p>
                                        <p className="font-normal text-gray-500 dark:text-gray-400">Expiry
                                            10/2024</p>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
                <button type="button" data-modal-target="accountInformationModal2"
                        data-modal-toggle="accountInformationModal2"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto">
                    <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"></path>
                    </svg>
                    Edit your data
                </button>
            </div>
            <div id="accountInformationModal2" tabIndex="-1" aria-hidden="true"
                 className="max-h-auto fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0">
                <div className="max-h-auto relative max-h-full w-full max-w-lg p-4">
                    <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
                        <div
                            className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Account Information</h3>
                            <button type="button"
                                    className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-toggle="accountInformationModal2">
                                <svg className="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form className="p-4 md:p-5">
                            <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="pick-up-point-input"
                                           className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Pick-up
                                        point* </label>
                                    <input type="text" id="pick-up-point-input"
                                           className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                           placeholder="Enter the pick-up point name" required/>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="full_name_info_modal"
                                           className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your
                                        Full Name* </label>
                                    <input type="text" id="full_name_info_modal"
                                           className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                           placeholder="Enter your first name" required/>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="email_info_modal"
                                           className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your
                                        Email* </label>
                                    <input type="text" id="email_info_modal"
                                           className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                           placeholder="Enter your email here" required/>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <div className="mb-2 flex items-center gap-2">
                                        <label htmlFor="select_country_input_billing_modal"
                                               className="block text-sm font-medium text-gray-900 dark:text-white"> Country* </label>
                                    </div>
                                    <select id="select_country_input_billing_modal"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                        <option selected>United States</option>
                                        <option defaultValue="AS">Australia</option>
                                        <option defaultValue="FR">France</option>
                                        <option defaultValue="ES">Spain</option>
                                        <option defaultValue="UK">United Kingdom</option>
                                    </select>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <div className="mb-2 flex items-center gap-2">
                                        <label htmlFor="select_city_input_billing_modal"
                                               className="block text-sm font-medium text-gray-900 dark:text-white"> City* </label>
                                    </div>
                                    <select id="select_city_input_billing_modal"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                        <option selected>San Francisco</option>
                                        <option defaultValue="NY">New York</option>
                                        <option defaultValue="LA">Los Angeles</option>
                                        <option defaultValue="CH">Chicago</option>
                                        <option defaultValue="HU">Houston</option>
                                    </select>
                                </div>

                                <div className="col-span-2">
                                    <label htmlFor="address_billing_modal"
                                           className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Delivery
                                        Address* </label>
                                    <textarea id="address_billing_modal" rows="4"
                                              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                              placeholder="Enter here your address"></textarea>
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="company_name"
                                           className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Company
                                        name </label>
                                    <input type="text" id="company_name"
                                           className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                           placeholder="Flowbite LLC"/>
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="vat_number"
                                           className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> VAT
                                        number </label>
                                    <input type="text" id="vat_number"
                                           className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                           placeholder="DE42313253"/>
                                </div>
                            </div>
                            <div className="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
                                <button type="submit"
                                        className="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save
                                    information
                                </button>
                                <button type="button" data-modal-toggle="accountInformationModal2"
                                        className="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default MyProfile
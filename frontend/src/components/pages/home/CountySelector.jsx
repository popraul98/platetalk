import React, {useEffect, useState} from 'react';
import axios from "axios";
import {GET_COUNTIES_LIST} from "../../../config/endpoints.js";
import {useDispatch, useSelector} from "react-redux";
import {selectCounty, getCountySelected} from "../../../store/countySlice.js";

const CountySelector = () => {

    const [county, setCounty] = useState([]);
    const dispatch = useDispatch()
    const countySelected = useSelector(getCountySelected)
    
    useEffect(() => {

        fetchCounties()

        import('flowbite').then((module) => {
            const {initFlowbite} = module;
            initFlowbite();
        });
    }, []);

    const fetchCounties = async () => {
        await axios.get(GET_COUNTIES_LIST, {
            headers: {
                'X-API-KEY': import.meta.env.VITE_API_KEY,
            },
        }).then(function (response) {
            setCounty(response.data)
        }).catch(function (error) {
            console.log(error.response.status, 'error list counties')
        });
    }

    const handleCountyChange = (e) => {
        const selectedCounty = e.target.value;
        dispatch(selectCounty(selectedCounty));
    };

    return (
        //TODO: afisare dropdown doar daca country e > 0

        <div className="w-full flex items-center space-x-2">
            <select className="text-sm text-gray-500"
                    onChange={handleCountyChange}
                    value={countySelected?.toString() || "0"}
            >
                <option value="0">Toate judetele</option>
                {county.length > 0 ? county.map((county) => (
                    <option key={county.prefix} value={county.prefix}>{county.name}</option>
                )) : null}
            </select>
            <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
        </div>
    );
}

export default CountySelector;


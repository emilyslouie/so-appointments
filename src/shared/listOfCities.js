import municipalities from './municipalities.json'; 

function getCities() {
    const cities = [];
    municipalities.map(m => (cities.push({value: m.municipality.content.split('<a title="').pop().split(',')[0].toString().split('"').toString().split(',').pop(), label: m.municipality.content.split('<a title="').pop().split(',')[0].toString().split('"').toString().split(',').pop()})));

    return cities;
}

export default getCities;
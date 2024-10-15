const data = [
    {
        "tahun": 2024,
        "result": [/*...*/]
    },
    {
        "tahun": 2023,
        "result": []
    },
    {
        "tahun": 2022,
        "result": []
    },
    {
        "tahun": 2021,
        "result": []
    },
    {
        "tahun": 2020,
        "result": []
    },
    {
        "tahun": 2019,
        "result": [/*...*/]
    },
    {
        "tahun": 2018,
        "result": []
    }
];

// Function to filter data by year
function filterByYear(dataArray, year) {
    return dataArray.filter(item => item.tahun === year);
}


console.log(filterByYear(data, 2024))
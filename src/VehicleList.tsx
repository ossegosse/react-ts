import { useState } from "react"

type Vehicle = {
    id: number;
    model: string;
    year: number;
    manufacturer: string;
}

const VehicleList = () => {

    const cars: Vehicle[] = [
        {id: 1, model: "Toyota Camry", year: 2022, manufacturer: "Toyota"},
        {id: 2, model: "Ford Mustang", year: 2023, manufacturer: "Ford"},
        {id: 3, model: "Honda Civic", year: 2024, manufacturer: "Honda"},
        {id: 4, model: "Chevrolet Silverado", year: 2022, manufacturer: "Chevrolet"},
        {id: 5, model: "BMW 3 Series", year: 2023, manufacturer: "BMW"}
    ]

    const [vehicles, setVehicles] = useState(cars)
    return (
        <>
            <h1>Vehicle List</h1>
            <ul>
                {vehicles.map((v: Vehicle) => {
                    return <li key={v.id}>{v.model}, {v.year}, {v.manufacturer}</li>
                })}
            </ul>
        </>
    )
}

export default VehicleList
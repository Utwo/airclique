
export interface IFlight {
    id: number;
    class: string;
    remaining_seats: number;
    seats_available: number;
    price: number;
    departure_time: Date;
    arrival_time: Date;
    created_at: Date;
    updated_at: Date;
    city_departure_id: number;
    city_destination_id: number;
    _pivot_user_id: number;
    _pivot_flight_id: number;
    _pivot_seats: number;
    DepartureCity: string;
    DestinationCity: string;
}

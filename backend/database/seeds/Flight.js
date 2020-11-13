"use strict";

const Flight = use("App/Model/Flight");
const City = use("App/Model/City");
const Factory = use("Factory");
const Database = use("Database");

class FlightSeeder {
  *run() {}

  *go() {
    yield Database.table("flights").delete();

    const cluj = yield City.findBy("code", "CLJ");
    const roma = yield City.findBy("code", "CIA");
    const paris = yield City.findBy("code", "BVA");
    const londra = yield City.findBy("code", "LTN");
    const eindhoven = yield City.findBy("code", "EIN");
    const budapesta = yield City.findBy("code", "BUD");
    const berlin = yield City.findBy("code", "SXF");
    const bruxelles = yield City.findBy("code", "CRL");

    const flight1 = new Flight({
      class: "business",
      seats_available: 100,
      price: 600,
      departure_time: new Date("April 20, 2020 05:00"),
      arrival_time: new Date("April 20, 2020 07:00"),
    });
    yield cluj.DepartureFlight().save(flight1);
    yield paris.DestinationFlight().save(flight1);

    const flight2 = yield Flight.create({
      class: "economy",
      seats_available: 400,
      price: 200,
      departure_time: new Date("January 20, 2021 11:00"),
      arrival_time: new Date("January 20, 2021 12:00"),
    });

    yield cluj.DepartureFlight().save(flight2);
    yield paris.DestinationFlight().save(flight2);

    const flight3 = yield Flight.create({
      class: "first",
      seats_available: 40,
      price: 1500,
      departure_time: new Date("January 22, 2021 11:00"),
      arrival_time: new Date("January 22, 2021 12:00"),
    });
    yield bruxelles.DepartureFlight().save(flight3);
    yield budapesta.DestinationFlight().save(flight3);

    const flight4 = yield Flight.create({
      class: "economy",
      seats_available: 120,
      price: 550,
      departure_time: new Date("January 30, 2021 10:00"),
      arrival_time: new Date("January 30, 2021 10:00"),
    });
    yield cluj.DepartureFlight().save(flight4);
    yield roma.DestinationFlight().save(flight4);

    const flight5 = yield Flight.create({
      class: "economy",
      seats_available: 100,
      price: 500,
      departure_time: new Date("February 1, 2021 07:00"),
      arrival_time: new Date("February 1, 2021 09:00"),
    });
    yield eindhoven.DepartureFlight().save(flight5);
    yield cluj.DestinationFlight().save(flight5);

    const flight6 = yield Flight.create({
      class: "business",
      seats_available: 100,
      price: 200,
      departure_time: new Date("February 10, 2021 08:00"),
      arrival_time: new Date("February 10, 2021 09:00"),
    });
    yield londra.DepartureFlight().save(flight6);
    yield paris.DestinationFlight().save(flight6);

    const flight7 = yield Flight.create({
      class: "economy",
      seats_available: 170,
      price: 400,
      departure_time: new Date("February 12, 2021 09:00"),
      arrival_time: new Date("February 12, 2021 10:00"),
    });
    yield budapesta.DepartureFlight().save(flight7);
    yield berlin.DestinationFlight().save(flight7);

    const flight8 = yield Flight.create({
      class: "business",
      seats_available: 100,
      price: 500,
      departure_time: new Date("February 13, 2021 09:00"),
      arrival_time: new Date("February 13, 2021 10:00"),
    });
    yield paris.DepartureFlight().save(flight8);
    yield roma.DestinationFlight().save(flight8);

    const flight9 = yield Flight.create({
      class: "first",
      seats_available: 120,
      price: 700,
      departure_time: new Date("February 15, 2021 10:00"),
      arrival_time: new Date("February 15, 2021 12:00"),
    });
    yield berlin.DepartureFlight().save(flight9);
    yield eindhoven.DestinationFlight().save(flight9);

    const flight10 = yield Flight.create({
      class: "business",
      seats_available: 300,
      price: 570,
      departure_time: new Date("February 25, 2021 10:00"),
      arrival_time: new Date("February 25, 2021 11:00"),
    });
    yield bruxelles.DepartureFlight().save(flight10);
    yield budapesta.DestinationFlight().save(flight10);
  }
}

module.exports = FlightSeeder;

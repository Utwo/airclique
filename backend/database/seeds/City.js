'use strict'

const City = use('App/Model/City')
const Factory = use('Factory')
const Database = use('Database')

class CitySeeder {
  *run() {
  }

  * go() {
    yield Database.table('cities').delete()

    yield City.create({
      'name': 'Cluj-Napoca',
      'country': 'Romania',
      'code': 'CLJ'
    })
    yield City.create({
      'name': 'Rome Ciampino',
      'country': 'Italia',
      'code': 'CIA'
    })
    yield City.create({
      'name': 'Paris Beauvais',
      'country': 'Franta',
      'code': 'BVA'
    })
    yield City.create({
      'name': 'Budapesta',
      'country': 'Ungaria',
      'code': 'BUD'
    })
    yield City.create({
      'name': 'Londra Luton',
      'country': 'Marea Britanie',
      'code': 'LTN'
    })
    yield City.create({
      'name': 'Eindhoven',
      'country': 'Olanda',
      'code': 'EIN'
    })
    yield City.create({
      'name': 'Bruxelles Charleroi',
      'country': 'Belgia',
      'code': 'CRL'
    })
    yield City.create({
      'name': 'Berlin Schönefeld',
      'country': 'Germania',
      'code': 'SXF'
    })
  }
}

module.exports = CitySeeder

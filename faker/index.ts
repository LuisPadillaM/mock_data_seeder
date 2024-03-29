import * as fs from 'fs'

import faker from 'faker'
faker.locale = 'es'
import {resolve, extend, Schema} from 'json-schema-faker'
import ObjToCsv  from 'objects-to-csv'
import composedSchema, {models} from './models'

const type = 'csv'
const entity = 'colaboradores'

extend('faker', () => {
  faker.custom = {
    fullName: () => `${faker.name.lastName()} ${faker.name.lastName()}`
  }
  return faker
})

resolve(composedSchema.properties.colaboradores, models as Schema[]).then(async (result) => {
  const csv = new ObjToCsv(result)
  const filePath = `${__dirname}/generated/${entity}`
  if(type === 'csv'){
    await csv.toDisk(`${filePath}.csv`)
  } else {
    fs.writeFile(`${filePath}.json`, JSON.stringify(result), (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err)
      } else {
        // eslint-disable-next-line no-console
        console.log('wrote to records.json')
      }
    })
  }
})

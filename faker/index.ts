import * as fs from 'fs'

import * as faker from 'faker'
faker.locale = 'es'
import {resolve, extend} from 'json-schema-faker'

import composedSchema, {models} from './models'

console.log('Schema', composedSchema)

extend('faker', () => faker)
resolve(composedSchema, models).then((result) => {
  console.log('RESULT', result)
  fs.writeFile(`${__dirname}/records.json`, JSON.stringify(result), (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    } else {
      // eslint-disable-next-line no-console
      console.log('wrote to records.json')
    }
  })
})

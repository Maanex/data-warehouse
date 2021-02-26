import * as mysql from 'mysql'


let conn: mysql.Connection = null

export function connection() {
  return conn
}

export function connectSQL(): Promise<boolean> {
  return new Promise((res) => {
    conn = mysql.createConnection({
      host: process.env.SQL_HOST,
      user: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD
    })

    conn.connect((err) => {
      res(!err)
    })
  })
}

export function dbQuery(query) {
  return new Promise((res) => {
    conn.query(query, (err, data) => {
      if (err) {
        console.error(query)
        console.info(err)
        res({})
      }
      if (process.env.NODE_ENV === 'dev')
        console.log(query)
      res(data)
    })
  })
}

type Config = {
  dbHost: string
  dbPort: number
  dbUsername: string
  dbPassword: string
  dbName: string
}

const config: Config = {
  dbHost: process.env.DB_HOST || '',
  dbPort: Number(process.env.DB_PORT) || 5432,
  dbUsername: process.env.DB_USERNAME || '',
  dbPassword: process.env.DB_PASSWORD || '',
  dbName: process.env.DB_NAME || '',
}

export default config

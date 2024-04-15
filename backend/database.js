import redis from 'redis'

const client = redis.createClient()

await client.connect()
client.on('error', (err) => console.error('Redis Client Error:', err))

export async function databaseImport(id, url) {
  await client.set(id, url)
  console.log(`url: ${url} with id: ${id} is imported`)
}
export async function databaseExport(id) {
  const url = await client.get(id);
  console.log(`url: ${url} with id: ${id} is exported`)
  return url
}

async function closeConnection() {
  await client.quit();
}

process.on('exit', closeConnection);
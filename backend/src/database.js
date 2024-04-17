import redis from 'redis'

const client = redis.createClient({
  username: 'default',
  password: '88b90a367eea4f2f830ffbff2ebfa9c5',
  socket: {
      host: 'skilled-macaw-50651.upstash.io',
      port: 50651,
      tls: true,
  }
});

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
const redis = require('redis');

// 建立 Redis 連線
const client = redis.createClient();

client.on('error', (err) => {
  console.log('Error ' + err);
});

// 連接到 Redis
client.connect().then(async () => {
  console.log('Connected to Redis');

  // 創建索引（若不存在）
  try {
    await client.sendCommand([
      'FT.CREATE', 'idx:users',
      'ON', 'HASH',
      'PREFIX', '1', 'user:',
      'SCHEMA',
      'account', 'TEXT',
      'location', 'TAG', 'SEPARATOR', ',',
      'start_time', 'NUMERIC', 
      'end_time', 'NUMERIC',
    ]);
    console.log('Index created');
  } catch (err) {
    if (err.message.includes('Index already exists')) {
      console.log('Index already exists');
    } else {
      console.log('Error creating index:', err);
    }
  }

  // 插入一些文件
  await client.hSet('user:1', {
    account: 'user1',
    location: '10,20,30',
    start_time: 10,
    end_time: 15
  });

  await client.hSet('user:2', {
    account: 'user2',
    location: '20,30,40',
    start_time: 5,
    end_time: 10
  });

  await client.hSet('user:3', {
    account: 'user3',
    location: '50,60,20',
    start_time: 18,
    end_time: 25
  });

  await client.hSet('user:4', {
    account: 'user4',
    location: '10,20',
    start_time: 10,
    end_time: 20
  });

  console.log('Documents inserted');

  // 搜尋 location 為 20 且 time 包含 10 的文件
  const searchTime = 10;
  const results = await client.sendCommand([
    'FT.SEARCH', 'idx:users',
    '@location:{10}', // 搜尋 location 包含 20 的文件
    'FILTER', 'start_time', '-inf', `${searchTime}`, // 搜尋 start_time 小於等於 searchTime 的文件
    'FILTER', 'end_time', `${searchTime}`, '+inf' // 搜尋 end_time 大於等於 searchTime 的文件
  ]);

  console.log('Search results:', results);

  await client.del('user:4');

  const results2 = await client.sendCommand([
    'FT.SEARCH', 'idx:users',
    '@location:{10}', // 搜尋 location 包含 20 的文件
    'FILTER', 'start_time', '-inf', `${searchTime}`, // 搜尋 start_time 小於等於 searchTime 的文件
    'FILTER', 'end_time', `${searchTime}`, '+inf' // 搜尋 end_time 大於等於 searchTime 的文件
  ]);

  console.log('Search results:', results2);

  // 關閉 Redis 連線
  await client.quit();
}).catch(err => {
  console.error('Could not connect to Redis:', err);
});

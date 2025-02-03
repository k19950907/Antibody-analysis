const db = require("./models")

async function connection_test() {
  try{
    await db.sequelize.authenticate()
    console.log("資料庫連線成功")
  } catch(error) {
    console.error("無法連接到資料庫", error)
  } finally {
    await db.sequelize.close()
  }
}

connection_test()
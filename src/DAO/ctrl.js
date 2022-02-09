const {runQuery} = require(`${__dirname}/../lib/database`)

//모든 유저 목록 가져오기
const getUserList = async () => {
	const sql = "SELECT id, username, datejoined, isActive FROM users;"
	const list = await runQuery(sql)

	return list
}
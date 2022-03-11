const { runQuery } = require(`${__dirname}/../lib/database`)

//모든 유저 목록 가져오기
const getUserList = async () => {
	const sql = "SELECT id, username, datejoined, isActive FROM users;"
	const list = await runQuery(sql)

	return list
}

const createUser = async () => {
	const sql = `INSERT into users (username, displayname, password, isActive) values ("${}","${}", "${}", 0 )`
	const list = await runQuery(sql)

	/* insert into users (username, displayname, password, isActive) values ("kim", "showKIM", "kim
	"> ", 0); */
	return list
}

module.exports = {
	getUserList,
	createUser,
}
show dbs

db

show collections

db.students.insert({name: 'jack', age: 18})

db.students.find({})

/*
	当我们向数据库中集合内插入文档时，会自动添加一个字段  _id : ObjectId
	标识这条数据是唯一的
*/

/*
	CRUD 增删改查
		- c create 插入数据
			db.collection.insert({文档对象})  向当前数据库指定集合内插入一条文档数据
			db.collection.insert([{文档对象}, {文档对象}])  向当前数据库指定集合内插入多条文档数据
			db.collection.insertOne({文档对象}) 向当前数据库指定集合内插入一条文档数据
			db.collection.insertMany([{文档对象}, {文档对象}]) 向当前数据库指定集合内插入多条文档数据
*/

db.students.insert([{name: 'Tom', age: 18}, {name: 'Jerry', age: 19}])

db.students.insertMany([{name: 'rose', age: 20}, {name: 'bob', age: 21}])


/*
	r - read 查询数据
		db.collection.find(查询条件, 投影)  当前数据库中指定集合内查询指定查询条件的所有文档
		db.collection.findOne(查询条件, 投影) 当前数据库中指定集合内查询指定查询条件的文档中的第一个
		db.collection.findMany(查询条件, 投影) 当前数据库中指定集合内查询指定查询条件的所有文档
		查询条件中有操作符：
			1. < > = <= >= != $lt $gt $eq $lte $gte $ne
			2. 或：$in $or 非：$nin
			3. 正则表达式
			4. $where
		投影：过滤你不想要的字段,查询出来的数据就更小
*/

db.students.find({name: 'rose', age: 20})


db.students.find({age: {$lt: 19}})


db.students.find({name: {$in: ['jack', 'rose']}})
db.students.find({$or: [{name: 'jack'}, {name: 'rose'}]})
db.students.find({age: {$nin: [18, 19]}})

db.students.find({name: /^j/})

db.students.find({
  $where: function () {
	return this.name === 'rose' && this.age === 20;
  }
})


db.students.find({age: {$gt: 18}}, {_id: 0, age: 0})



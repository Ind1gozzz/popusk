const learndb = require("./learndb")
const { DataTypes } = require("sequelize")

const Goods_wh = learndb.define("goods_wh", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  quantity: { type: DataTypes.NUMBER },
  id_wh: { type: DataTypes.INTEGER },
  id_goods: { type: DataTypes.INTEGER }
})

const Goods = learndb.define("goods", {
  id_goods: { type: DataTypes.INTEGER, rimaryKey: true, autoIncrement: true },
  nomenclature: { type: DataTypes.CHAR },
  measure: { type: DataTypes.CHAR }
})

const Warehouse = learndb.define("warehouse", {
  id_wh: { type: DataTypes.INTEGER, rimaryKey: true, autoIncrement: true },
  name: { type: DataTypes.CHAR },
  town: { type: DataTypes.CHAR }
})

const Agent = learndb.define("agent", {
  id_ag: { type: DataTypes.INTEGER, rimaryKey: true, autoIncrement: true },
  name_ag: { type: DataTypes.CHAR },
  town: { type: DataTypes.CHAR },
  phone: { type: DataTypes.CHAR }
})

const Operation = learndb.define("operation", {
  id: { type: DataTypes.INTEGER, rimaryKey: true, autoIncrement: true },
  typeof: { type: DataTypes.CHAR },
  quantity: { type: DataTypes.NUMBER },
  price: { type: DataTypes.NUMBER },
  op_date: { type: DataTypes.DATE },
  id_goods: { type: DataTypes.INTEGER },
  id_ag: { type: DataTypes.INTEGER },
  id_wh: { type: DataTypes.INTEGER }
})

Goods.hasMany(Goods_wh)
Goods_wh.belongsTo(Goods)

Warehouse.hasMany(Goods_wh)
Goods_wh.belongsTo(Warehouse)

Goods.hasMany(Operation)
Operation.belongsTo(Goods)

Warehouse.hasMany(Operation)
Operation.belongsTo(Warehouse)

Agent.hasMany(Operation)
Operation.belongsTo(Agent)
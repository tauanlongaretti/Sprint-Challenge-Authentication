const db = require('../database/dbConfig');

async function add(user) {
    const [id] = await db("users").insert(user, "id");
  
    return findById(id);
  }

function findById(id) {
    return db("users").where({ id }).first();
}

function findBy(filter) {
    return db("users").where(filter);
}

module.exports = {
    add,
    findById,
    findBy
};
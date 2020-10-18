function deleteOrphanage(db, id) {
  //console.log('Tentei excluir!');
  return db.run(`
      DELETE FROM orphanages WHERE id=${id};
    `);
}

module.exports = deleteOrphanage;

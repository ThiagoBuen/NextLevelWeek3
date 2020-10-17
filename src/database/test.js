const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async (db) => {
  await saveOrphanage(db, {
    lat: '-22.2635347',
    lng: '-45.6955906',
    name: 'Lar dxs meninxs',
    about:
      'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
    whatsapp: '+35999554422',
    images: [
      'https://source.unsplash.com/random?id=1',
      'https://source.unsplash.com/random?id=2',
    ].toString(),
    instructions:
      'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
    opening_hours: 'Horário de visitas Das 8h até 18h',
    open_on_weekends: '0',
  });

  //const selectedOrphanages = await db.all('SELECT * FROM orphanages');
  //console.log(selectedOrphanages);

  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  console.log(orphanage);

  //await db.run('DELETE FROM orphanages WHERE id = "1" ');
});

const dbPool = require ('../config/db')

const getindex = () => {
    const SQLQuery = 'SELECT * FROM kategori';
   
    return dbPool.execute(SQLQuery);
   }
   
   const getByid = async (id) => { // ✅ Pastikan id masuk sebagai parameter
       console.log("ID yang dikirim ke query:", id); // Debugging
   
       const SQLQuery = 'SELECT * FROM kategori WHERE id = ?';  
       return dbPool.execute(SQLQuery, [id]); // ✅ Gunakan parameterized query
   };
   
   const createnew = (body) => {
    const SQLQuery = `INSERT INTO kategori (name) VALUES (?)`;
    return dbPool.execute(SQLQuery, [body.name]);
   }

   
   const updateKategori = (body, id) => {
    const SQLQuery = `UPDATE kategori SET name = ? WHERE id = ?`;
    return dbPool.execute(SQLQuery, [body.name, id]);
    }

    const deleteKategori = (id) => {
        const SQLQuery = `DELETE FROM kategori WHERE id = ?`;
        return dbPool.execute(SQLQuery, [id]);
    }
    
   
   module.exports = {
       getindex,
       createnew,
       updateKategori,
       deleteKategori,
       getByid,
   }
const dbPool = require ('../config/db')

const getindex = () => {
 const SQLQuery = 'SELECT * FROM users';

 return dbPool.execute(SQLQuery);
}

const getByid = async (id) => { // ✅ Pastikan id masuk sebagai parameter
    console.log("ID yang dikirim ke query:", id); // Debugging

    const SQLQuery = 'SELECT * FROM users WHERE id = ?';  
    return dbPool.execute(SQLQuery, [id]); // ✅ Gunakan parameterized query
};

const createnew = (body) => {
    const SQLQuery = ` INSERT INTO users (username, password, name , email , phone) 
                       VALUES ('${body.usersname}', '${body.password}', '${body.name}', '${body.email}', '${body.phone}')`;
   return dbPool.execute(SQLQuery);
}

const updateusers = (body, id) => {
    const SQLQuery = `UPDATE users 
                     SET username='${body.usersname}', 
                        password='${body.password}',
                        name='${body.name}',
                         email='${body.email}', 
                         phone='${body.phone}'
                        WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

const deleteusers = (id) => {
    const SQLQuery= `DELETE FROM users WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getindex,
    createnew,
    updateusers,
    deleteusers,
    getByid,
}
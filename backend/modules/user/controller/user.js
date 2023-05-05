import sql from '../../../DB/connection.js'
export const userPage = (req, res, next) => {
    res.json({ message: "Home Page" })
}
export const aboutPage = (req, res, next) => {
    res.send("About Page")
}
export const getAllUser = (req, res, next) => {
    sql.execute(`select * from users`, (err, result) => {
        if (err) {
            res.json({ message: "Query error", err })
        } else {
            res.json({ message: "Done", userList: result })
        }
    })
}
export const addUser = (req, res, next) => {
    const { userName, email, password, age } = req.body
    sql.execute(`insert into users (userName , email , password ,age) 
        values('${userName}' , '${email}' , '${password}' , ${age})`,
        (err, result) => {
            if (err) {
                res.json({ message: "Query error", err })
            } else {
                res.json({ message: "Success", result })
            }
        })
}


export const updateUser = (req, res, next) => {
    const { id } = req.params
    const { age, phone } = req.body
    console.log(phone);
    sql.execute(`update users set age=${age} , phone='${phone}' 
    where  id = ${id}`,
        (err, result, fields) => {
            if (err) {
                res.json({ message: "Query error", err })
            } else {
                if (result.affectedRows) {
                    res.json({ message: "Done", result })
                } else {
                    res.json({ message: "In-valid account", result })
                }
            }
        })
}


export const deleteUser = (req, res, next) => {
    const { id } = req.params
    sql.execute(`delete from users where id = ${id}`,
        (err, result, fields) => {
            if (err) {
                res.json({ message: "Query error", err })
            } else {
                if (result.affectedRows) {
                    res.json({ message: "Done", result })
                } else {
                    res.json({ message: "In-valid account", result })
                }
            }
        })
}

export const searchUser = (req, res, next) => {
    const { searchKey } = req.query
    console.log(searchKey);
    sql.execute(`select *  from users where userName like 
    '%${searchKey}%'`, (err, result) => {
        if (err) {
            res.json({ message: "Query error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}



export const signin = (req, res, next) => {
    const { email, password } = req.body
    sql.execute(`select * from users where email='${email}' and password='${password}'`,
        (err, result) => {
            if (err) {
                res.json({ message: "Query error", err })
            } else {
                if (result.length ==1 ) {
                    res.json({ message: "Done", result })

                } else {
                    res.json({ message: "In-valid account" })

                }
            }
        })
}

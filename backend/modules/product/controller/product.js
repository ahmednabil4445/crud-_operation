import sql from "../../../DB/connection.js"



export const addProduct = (req, res, next) => {
    const { name, price, description, userID } = req.body
    sql.execute(`insert into products (name , description , price , userID) 
    values('${name}' , '${description}' , ${price} , ${userID})`,
        (err, result) => {
            if (err) {
                res.json({ message: "Query error", err })
            } else {
                if (result.affectedRows) {
                    res.json({ message: "Done", result })

                } else {
                    res.json({ message: "In-valid data", result })
                }
            }
        })
}

export const allProducts = (req, res) => {
    sql.execute(`select u.id as U_id , p.id as P_ID , 
    u.userName , p.name , p.description , 
    p.price from products as p inner join users as u on u.id = p.userID `, (err, result) => {
        if (err) {
            res.json({ message: "Query error", err })
        } else {
            res.json({ message: "Done", result })

        }
    })
}


export const getProduct = (req, res) => {
    const { id } = req.params
    sql.execute(`select u.id as U_id , p.id as P_ID , 
    u.userName , p.name , p.description , 
    p.price from products as p inner join users as u on u.id = p.userID 
    where p.id = ${id}`, (err, result) => {
        if (err) {
            res.json({ message: "Query error", err })
        } else {
            res.json({ message: "Done", result })

        }
    })
}


export const updateProduct = (req, res) => {
    const { id } = req.params
    const { name, price, description } = req.body
    sql.execute(`update products set name='${name}' ,
     price=${price} , description ='${description}' 
     where id=${id}`, (err, result) => {
        if (err) {
            res.json({ message: "Query error", err })
        } else {
            res.json({ message: "Done", result })

        }
    })
}


export const deleteProduct = (req, res) => {

    const { id } = req.params
    sql.execute(`delete from products where id = ${id}`, (err, result) => {
        if (err) {
            res.json({ message: "Query error", err })
        } else {
            if (result.affectedRows) {
                res.json({ message: "Done", result })

            } else {
                res.json({ message: "In-valid product ID"})

            }
        }
    })
}
import dotenv from "dotenv"
dotenv.config()

const {
    DB_TABLE_SYSTEMSTOD,
    DB_TABLE_TJANSTER,
    DB_TABLE_KATEGORIER,
    DB_TABLE_INSTRUKTIONER,
    DB_TABLE_FELSOKNING,
    DB_DATABASE,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
} = process.env

import mysql, { Types } from "mysql"
const mysqlConnection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
})

function getData(table: string, id?: string): Promise<[]> {
    return new Promise((resolve, reject) => {
        let query = `SELECT * FROM ${table}`
        if (id) query += " WHERE id = ?"
        mysqlConnection.query(query, [id], (error, results) => {
            if (error) reject(error)

            resolve(results)
        })
    })
}

export async function getSystem(id?: string): Promise<Systemstod[]> {
    if (!DB_TABLE_SYSTEMSTOD) throw new Error("Nödvändiga uppgifter om databasen har inte laddats. Rör 'Systemstöd'")
    return await getData(DB_TABLE_SYSTEMSTOD, id)
}

export async function getService(id?: string): Promise<Tjanst[]> {
    if (!DB_TABLE_TJANSTER) throw new Error("Nödvändiga uppgifter om databasen har inte laddats. Rör 'Tjänster'")
    return await getData(DB_TABLE_TJANSTER, id)
}

export async function getCategory(id?: string): Promise<Kategori[]> {
    if (!DB_TABLE_KATEGORIER) throw new Error("Nödvändiga uppgifter om databasen har inte laddats. Rör 'Kategorier'")
    return await getData(DB_TABLE_KATEGORIER, id)
}

export async function getInstruction(id?: string): Promise<Instruktion[]> {
    if (!DB_TABLE_INSTRUKTIONER) throw new Error("Nödvändiga uppgifter om databasen har inte laddats. Rör 'Instruktioner'")
    return await getData(DB_TABLE_INSTRUKTIONER, id)
}

export async function getTroubleshooting(id?: string): Promise<Felsokning[]> {
    if (!DB_TABLE_FELSOKNING) throw new Error("Nödvändiga uppgifter om databasen har inte laddats. Rör 'Felsökning'")
    else return await getData(DB_TABLE_FELSOKNING, id)
}
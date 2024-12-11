const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite'); // SQLite database

// Create tables
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS technicians (technician_id INTEGER PRIMARY KEY, name TEXT, photo TEXT, specialization TEXT, rating INTEGER, description TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY, email TEXT, password TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS appliance_types (appliance_id INTEGER PRIMARY KEY, type_name TEXT)");

  // Insert sample data (optional)
  db.run("INSERT INTO appliance_types (type_name) VALUES ('Refrigerator')");
  db.run("INSERT INTO appliance_types (type_name) VALUES ('Air Conditioner')");
  db.run("INSERT INTO appliance_types (type_name) VALUES ('Washing Machine')");
  db.run("INSERT INTO appliance_types (type_name) VALUES ('Microwave')");
});

module.exports = db;

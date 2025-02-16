import SQLite from 'react-native-sqlite-storage';
interface User {
  id: number;
  username: string;
  grade: number;
  pretestscore: number | 0;
  posttestscore: number | 0;
  pretestDone: string;
}
const db = SQLite.openDatabase(
  { name: 'myDatabase.db', location: 'default' },
  () => console.log('Database opened'),
  (error) => console.error('Database error:', error)
);
// db.transaction((tx) => {
//   tx.executeSql("DROP TABLE IF EXISTS Users;", [], () => {
//     console.log("Users table dropped.");
//   });
// });

// Function to initialize the database and create tables
export const initDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        grade INTEGER,
        pretestscore INTEGER,
        posttestscore INTEGER,
        pretestDone TEXT
      );`,
      [],
      () => console.log('Users table created'),
      (error) => console.error('Table creation error:', error)
    );
  });
};

// Function to insert a user
export const insertUser = (username: string, grade: number) => {
  return new Promise((resolve, reject) => {
    const bool = "false"
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO Users (username, grade, pretestDone) VALUES (?, ?, ?);`,
        [username, grade, bool],
        (_, results) =>{ resolve(results); console.log("success")},
        (_, error) => {reject(error); console.log(error)}
      );
    });
  });
};

// Function to get a user by name
export const getUserByName = (username: string, grade: number): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM Users WHERE username = ? AND grade = ?;`,
        [username, grade],
        (_, results) => {
          const user = results.rows.length > 0 ? results.rows.item(0) : null;
          resolve(user);
        },
        (_, error) => reject(error)
      );
    });
  });
};

// Function to update pretest or posttest scores
export const updateScores = (username: string, pretest: number, posttest: number) => {
  return new Promise((resolve, reject) => {
    console.log(username,pretest,posttest)
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE Users SET pretestDone = ?, pretestscore = ?, posttestscore = ? WHERE username = ?;`,
        ["true",pretest, posttest, username],
        (_, results) => {resolve(results); console.log(results)},
        (_, error) => reject(error)
      );
    });
  });
};

// Function to delete a user
export const deleteUser = (username: string) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM Users WHERE username = ?;`,
        [username],
        (_, results) => resolve(results),
        (_, error) => reject(error)
      );
    });
  });
};

export default db;

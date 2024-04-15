import { connect } from "mongoose";

export const startConnection = async () => {
  try {
    const { connection } = await connect("mongodb://localhost/mevn-database");
    console.log("Database is connected to:", connection.name);
  } catch (error) {
    console.error(error);
  }
};
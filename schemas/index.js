// 몽구스 모듈 참조
const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {
        if (process.env.NODE_ENV !== "production") {
            mongoose.set("debug", true);
            mongoose.set('useNewUrlParser', true);
            mongoose.set('useFindAndModify', false);
            mongoose.set('useCreateIndex', true);
            mongoose.set('useUnifiedTopology', true);
        }
        mongoose.connect(
            "mongodb://scarlet:tmdcks2416@localhost:27017/admin",
            {
                dbName: "admin"
            },
            error => {
                if (error) {
                    console.log("Errors Occur during MongoDB Connection", error);
                } else {
                    console.log("MongoDB Connection Successed");
                }
            }
        );
    };
    connect();
    mongoose.connection.on("error", error => {
        console.log("Errors Occur during MongoDB Connection", error);
    });
    mongoose.connection.on("disconnected", () => {
        console.log("MongoDB Connection Disconnected, Reconnecting...");
        connect();
    });
    // DB 스키마 참조하는 부분
    require("./user");
    require("./board");
}
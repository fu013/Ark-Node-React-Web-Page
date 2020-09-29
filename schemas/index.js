// 몽구스 모듈 참조
const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {
        if (process.env.NODE_ENV !== "production") {
            mongoose.set("debug", true);
        }
        mongoose.connect(
            "mongodb://scarlet:tmdcks2416@localhost:27017/admin",
            {
                dbName: "admin"
            },
            error => {
                if (error) {
                    console.log("몽고디비 연결 에러", error);
                } else {
                    console.log("몽고디비 연결 성공");
                }
            }
        );
    };
    connect();
    mongoose.connection.on("error", error => {
        console.log("몽고디비 연결 에러", error);
    });
    mongoose.connection.on("disconnected", () => {
        console.log("몽고디비 연결이 끊겼습니다. 연결을 재시도 합니다.");
        connect();
    });
    // DB 스키마 참조하는 부분
    /* require("./user");
    require("./board"); */
}
const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
    Types: { ObjectId }
} = Schema;

// ref == MySQL에서 foreign키 필드
// required == MySQL에서 NOT NULL키 필드
// required & unique 동시에 걸어주면 primary랑 비슷한 기능을 함.
const boardSchema = new Schema ({
    writer: {
        type: ObjectId,
        required: true,
        ref: "Users"
    },
    title : {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Board", boardSchema, "Board");
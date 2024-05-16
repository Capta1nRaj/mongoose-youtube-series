import { NextResponse, type NextRequest } from "next/server";
import mongoose from "mongoose";

export async function GET(request: NextRequest) {
    mongoose.connect('mongodb://127.0.0.1:27017/test')
        .then(() => console.log('Connected!'));

    return NextResponse.json({ message: "Hello" }, { status: 200 });
}
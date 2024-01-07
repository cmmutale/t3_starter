import { NextResponse } from "next/server";
import { getServerAuthSession } from "@/server/auth";
import { db } from "@/server/db";

export async function GET() {
    const session = await getServerAuthSession();
    try {
        if (!session) {
            return NextResponse.json({
                message: 'You are not logged in'
            });
        }
        return NextResponse.json({
            message: 'You are logged in'
        });
    } catch (error) {
        return NextResponse.json({
            message: error
        })
    }
}

export async function PATCH(req: Request) {
    const session = await getServerAuthSession();
    try {
        if (!session) {
            return NextResponse.json({
                message: 'You are not logged in'
            });
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const body = await req.json();
        const user = await db.user.update({
            where: {
                id: session.user.id
            },
            data: {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                name: body.name,
                lastActivity: new Date(),
            }
        })
        return NextResponse.json({
            message: user
        });
    } catch (error) {
        return NextResponse.json({
            message: error
        });
    }
}
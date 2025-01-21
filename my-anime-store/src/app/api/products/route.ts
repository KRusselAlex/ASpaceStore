import { NextResponse } from 'next/server';

export async function GET() {
    const products = [
        { id: 1, name: 'Anime Figurine', price: 29.99 },
        { id: 2, name: 'Anime Poster', price: 9.99 },
    ];

    return NextResponse.json(products);
}
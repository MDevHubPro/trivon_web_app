'use client';

import Image from "next/image";

export default function Web3Section() {
    return (
        <section className="py-24 mx-auto w-full overflow-hidden">
            <Image
                src="/assets/web3.png"
                alt="Web 3.0"
                width={1900}
                height={800}
                className="w-full h-auto object-contain"
                priority
                draggable={false}
            />
        </section>
    );
}

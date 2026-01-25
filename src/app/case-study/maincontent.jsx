import Image from 'next/image'

const Maincontent = () => {

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16  relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="max-w-2xl  md:pl-12">
                            <div className="flex items-center gap-4 mb-6">
                                <h1 className="text-5xl font-medium text-white tracking-tight">
                                    Case Studies
                                </h1>
                                <div className='w-12 h-12 relative'>

                                    <Image src="/assets/arrow-2.svg" alt="arrow" fill className='object-cover' />
                                </div>
                            </div>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                Trivon is a security-first blockchain consulting company that provides a range of services related to Trivon technology with strong emphasis on security engineering.
                            </p>
                        </div>

                        {/* Abstract Grid/Globe Graphic on Right */}

                    </div>
                </div>

            </section>
        </>
    )
}

export default Maincontent
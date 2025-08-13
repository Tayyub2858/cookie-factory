import Image from 'next/image';
import navImage from '../../../public/Assets/Component 3.png';
import logo from '../../../public/Assets/ava logo 3.png';

export default function Navbar() {
    return (
        <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12">
                <div className="mb-4 lg:mb-0">
                    <div className="inline-block border-y-4">
                        <Image src={logo} alt="Logo" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <Image src={navImage} alt="Nav Image" className="w-full h-[60px]" />
                </div>
            </div>
        </div>
    );
}

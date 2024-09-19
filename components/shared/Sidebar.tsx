"use client"

import { navLinks } from '@/constants';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className='sidebar'>
      <div className='flex size-full flex-col gap-4'>
        <Link href="/" className='sidebar-logo'>
          <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
        </Link>

        <nav className='sidebar-nav'>
          <SignedIn>
            <ul className='sidebar-nav_elements'>
              {navLinks.slice(0,6).map((link)=> {
                const isActive =link.route === pathname;
                return(
                  <li key={link.route} className={`sidebar-nav_element group ${isActive? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                    <Link className='sidebar-link' href={link.route}>
                      <Image src={link.icon} alt="logo" width={24} height={24} className={`${isActive && 'brightness-200'}`}/>{link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <ul className='sidebar-nav_elements'>
              {navLinks.slice(6).map((link)=> {
                  const isActive =link.route === pathname;
                  return(
                    <li key={link.route} className={`sidebar-nav_element group ${isActive? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                      <Link className='sidebar-link' href={link.route}>
                        <Image src={link.icon} alt="logo" width={24} height={24} className={`${isActive && 'brightness-200'}`}/>{link.label}
                      </Link>
                    </li>
                  )
                })}
              <li className='flex-center cursor-pointer gap-2 p-4'>
                {/* user button 컴포넌트는 clerk authentication 라이브러리 컴포넌트로, 사용자 세팅 보여주는 컴포넌트  + showName prop은 사용자 이름 보여주라는 의미*/}
                <UserButton showName/>
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            {/* shadcn의 button 컴포넌트 install하여 사용 . npx shadcn@latest add button 커맨드 실시하면, 저절로 components/ui폴더가 생성되고 그 안에 파일들이 만들어짐. 원하는 대로 커스터마이제이션 가능*/}
              {/* asChild는 shadcn에서 사용되는 prop으로 중첩 (nested)되는 props들이 있을 경우 이를 방지해 주는 역할.
                즉, 보통 <button onClick={navigate('sign-in)} /> 이런 식으로 하는데, asChild를 사용함으로써 link가 버튼 스타일링으로 제대로 작동하게 해줌..
              */}
              <Button asChild className='button bg-purple-gradient bg-cover'>
                <Link href="/sign-in">Login</Link>
              </Button>
          </SignedOut>
        </nav>


      </div>
    </aside>
  );
}


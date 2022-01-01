import Image from 'next/image';
import { Fragment } from 'react';
import Link from 'next/link';

type Props = {
  title: string | Array<string | JSX.Element>,
  children: JSX.Element | string
  image: string | StaticImageData
  link: string
  linkText?: string
}

export default function PrestationItem({
  image, title, children, link = '', linkText = '',
}: Props) {
  return (
    <div className="text-center h-full flex flex-col">
      <div>
        <Image
          width={178}
          height={178}
          src={image}
          alt={Array.isArray(title) ? title.join(' ') : title}
        />
      </div>

      <h3 className="text-xl text-white font-medium mt-1 leading-7">
        {Array.isArray(title) ? title.map((ttl) => <Fragment key={`${ttl.toString()}-`}>{ttl}</Fragment>) : title}
      </h3>

      <p className="text-base md:text-sm lg:text-base leading-5 lg:leading-5 mt-1 mb-2">{children}</p>

      {link !== '' && (
        <div className="mt-auto">
          <Link href={link}>
            <a className="button">{linkText}</a>
          </Link>
        </div>
      )}
    </div>
  );
}
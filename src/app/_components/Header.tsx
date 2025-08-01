'use client';

import { useRouter } from 'next/navigation';
import { IconChevronLeft } from "@tabler/icons-react";
import Typography from "@/components/components/atoms/typography";

interface HeaderProps {
  title: string;
  onBackClick?: () => void;
}

const Header = ({ title, onBackClick }: HeaderProps) => {
  const router = useRouter();

  const handleBack = onBackClick || (() => router.back());

  return (
    <div className="flex justify-between items-center relative py-2">
      <div className="absolute ">
        <IconChevronLeft size={24} className="cursor-pointer" onClick={handleBack} />
      </div>
      <div className="flex-grow text-center">
        <Typography variant="paragraph/md" weight="medium" className='text-right'>{title}</Typography>
      </div>
      
    </div>
  );
};

export default Header; 
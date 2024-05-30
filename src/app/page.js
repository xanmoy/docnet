import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { MoveUpRight } from 'lucide-react';
import DocNetBody from '@/components/DocNetBody';
export default function Home() {
  return (
    <div className="flex contain">
      <DocNetBody />
    </div>
  );
}

import { Facebook, Instagram, Twitter, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">HomeHelper</h2>
            <p className="text-sm">Your ultimate home management solution. Simplify your daily tasks and enjoy a well-organized home life.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/categories" className="hover:underline">Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">FAQ</Link></li>
              <li><Link href="#" className="hover:underline">Contact Us</Link></li>
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest features and tips.</p>
            <div className="flex">
              <Input type="email" placeholder="Your email" className="rounded-r-none" />
              <Button type="submit" className="rounded-l-none">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            © 2024 HomeHelper. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Button size="icon" variant="ghost">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
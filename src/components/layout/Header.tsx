import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#for-brands", label: "For Brands" },
    { href: "#for-influencers", label: "For Influencers" },
    { href: "#how-it-works", label: "How It Works" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 minimal-nav">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="HiveSphere" 
              className="h-10 w-auto opacity-90"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-foreground/80 hover:text-foreground transition-all duration-300 font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
            <Button 
              asChild 
              variant="ghost" 
              className="text-foreground/80 hover:text-foreground hover:bg-muted/50"
            >
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button 
              asChild 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-minimal hover:shadow-minimal-lg"
            >
              <Link to="/register">Register</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/30 backdrop-blur-sm">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map(link => (
                 <a 
                  key={link.href}
                  href={link.href} 
                  className="text-foreground/80 hover:text-foreground transition-all duration-300 py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                asChild 
                variant="ghost" 
                className="text-foreground/80 hover:text-foreground hover:bg-muted/50 w-full justify-start"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button 
                asChild 
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full shadow-minimal"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/register">Register</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
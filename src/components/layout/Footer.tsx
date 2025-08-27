import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-muted/30 border-t border-border/30">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="HiveSphere logo" className="h-8 w-auto opacity-80" />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md font-light">
              Connecting Nigerian brands with authentic micro and nano influencers. 
              Build meaningful partnerships that drive real results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">For Brands</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#for-brands" className="hover:text-foreground transition-colors text-sm font-light">Why Hivesphere?</a></li>
              <li><Link to="/register?role=brand" className="hover:text-foreground transition-colors text-sm font-light">Start a Campaign</Link></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors text-sm font-light">How It Works</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">For Influencers</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#for-influencers" className="hover:text-foreground transition-colors text-sm font-light">Why Join?</a></li>
              <li><Link to="/register?role=influencer" className="hover:text-foreground transition-colors text-sm font-light">Create Profile</Link></li>
              <li><a href="#" className="hover:text-foreground transition-colors text-sm font-light">Success Stories</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-light">
            © 2025 HiveSphere. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors font-light">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors font-light">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
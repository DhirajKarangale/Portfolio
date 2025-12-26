import {
  Linkedin,
  Code2,
  Share2, 
  Mail,
  MapPin,
  Phone,
  Twitter,
  Github,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full space-y-5 sm:space-y-2 p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/20 to-background border border-border">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-primary"></span>
              Contact Details
            </h3>

            <div className="space-y-5 sm:space-y-2">
              <div className="relative flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2 p-1 sm:p-2 rounded-xl hover:bg-accent/30 transition">
                <div className="flex items-center gap-3 min-w-[140px]">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Email
                  </span>
                </div>

                <a
                  href="mailto:dakarangale02@gmail.com"
                  className="text-sm sm:text-base font-medium hover:text-primary break-all pl-[44px] sm:pl-0"
                >
                  dakarangale02@gmail.com
                </a>
              </div>

              <div className="relative flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2 p-1 sm:p-2 rounded-xl hover:bg-accent/30 transition">
                <div className="flex items-center gap-3 min-w-[140px]">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Phone
                  </span>
                </div>

                <a
                  href="tel:+917620320595"
                  className="text-sm sm:text-base font-medium hover:text-primary pl-[44px] sm:pl-0"
                >
                  +91 7620320595
                </a>
              </div>

              <div className="relative flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2 p-1 sm:p-2 rounded-xl hover:bg-accent/30 transition">
                <div className="flex items-center gap-3 min-w-[140px]">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Location
                  </span>
                </div>

                <span className="text-sm sm:text-base font-medium pl-[44px] sm:pl-0 hover:text-primary">
                  Pune, Maharashtra, India
                </span>
              </div>
            </div>

            <div className="relative flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2 gap-y-1 p-1 sm:p-2 rounded-xl hover:bg-accent/30 transition">
              <div className="flex items-center gap-3 min-w-[140px]">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Share2 className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Find me on
                </span>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 pl-[44px] sm:pl-0">
                {[
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/in/dhiraj-karangale-464ab91bb/",
                  },
                  {
                    icon: Twitter,
                    label: "Twitter",
                    url: "https://x.com/dhirajkarangale",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    url: "https://github.com/DhirajKarangale",
                  },
                  {
                    icon: Code2,
                    label: "LeetCode",
                    url: "https://leetcode.com/u/DhirajKarangale/",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 rounded-lg bg-accent hover:bg-primary/10 text-muted-foreground hover:text-primary transition"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
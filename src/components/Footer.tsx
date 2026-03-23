const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-display text-sm font-semibold text-foreground">
        G<span className="text-primary">.</span>N
      </p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Gerges Naguib. Built with React & precision.
      </p>
    </div>
  </footer>
);

export default Footer;

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container flex items-center justify-center gap-x-3 gap-y-1 border-t pt-2 text-center text-sm text-muted-foreground sm:flex-row">
        <p>
          Nim Catering company &copy;{new Date().getFullYear()}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

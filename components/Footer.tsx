export default function Footer() {
  return (
    <footer className="mt-12 bg-gray-800 py-4 text-white">
      <div className="container mx-auto px-4 text-center">
        <p>
          Copyright &copy; {new Date().getFullYear()} | All rights reserved
        </p>
      </div>
    </footer>
  );
}

const Footer = () => {
  return (
    <footer className="bg-accent w-full gap-1 p-8">
      <p className="text-xs font-medium">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-bold">BsD Wear</span>
        <span className="text-muted-foreground text-xs font-medium">
          Todos os direitos reservados.
        </span>
      </p>
    </footer>
  )
}

export default Footer
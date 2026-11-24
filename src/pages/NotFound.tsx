const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center bg-mist text-forest font-body">
      <div className="mx-auto w-full max-w-[78rem] px-6 md:px-12 lg:px-16">
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Essa página não existe.</h1>
        <p className="mt-4 text-lg text-moss">O endereço pode ter mudado ou estar digitado errado.</p>
        <a href="/" className="text-link mt-8 inline-block font-display text-lg font-medium">
          Voltar para o portfólio
        </a>
      </div>
    </main>
  );
};

export default NotFound;

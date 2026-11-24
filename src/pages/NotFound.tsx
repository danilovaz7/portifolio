const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center bg-paper text-ink font-body">
      <div className="page">
        <h1 className="section-title font-display">Essa página não existe.</h1>
        <p className="mt-4 text-lg text-ink-soft">O endereço pode ter mudado ou estar digitado errado.</p>
        <a href="/" className="text-link mt-8 inline-block font-display text-lg font-medium">
          Voltar para o portfólio
        </a>
      </div>
    </main>
  );
};

export default NotFound;

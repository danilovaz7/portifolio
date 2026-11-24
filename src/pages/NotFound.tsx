const NotFound = () => {
  return (
    <main className="grid min-h-screen place-items-center bg-night px-6 text-cloud font-body">
      <div className="max-w-lg text-center">
        <p className="font-display text-7xl font-extrabold text-sage">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold">Essa página não existe.</h1>
        <p className="mt-3 text-fog">O endereço pode ter mudado ou estar digitado errado.</p>
        <a href="/" className="btn-mint mt-8">Voltar para o portfólio</a>
      </div>
    </main>
  );
};

export default NotFound;

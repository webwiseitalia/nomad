import frame8 from '../assets/Frame 8.png'

export default function CreateYourIdea() {
  return (
    <section className="w-full h-screen bg-white relative">
      {/* Background Image */}
      <img
        src={frame8}
        alt="Creo la tua idea"
        className="w-full h-full object-cover"
      />

      {/* Form Overlay */}
      <div className="absolute inset-0 flex items-end justify-center pb-8 px-8">
        <div className="bg-white border border-black max-w-3xl w-full p-12">
          <h2 className="text-3xl font-bold text-black mb-2 tracking-tight uppercase">
            Contatti
          </h2>
          <p className="text-gray-600 text-sm mb-10 font-light">
            Compila il form per richiedere informazioni
          </p>

          <form className="space-y-6">
            {/* Nome e Cognome */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-black mb-2 uppercase tracking-wide">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-0 py-3 border-b border-gray-300 focus:outline-none focus:border-black transition-colors duration-300 bg-transparent text-black placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-black mb-2 uppercase tracking-wide">
                  Cognome
                </label>
                <input
                  type="text"
                  placeholder="Cognome"
                  className="w-full px-0 py-3 border-b border-gray-300 focus:outline-none focus:border-black transition-colors duration-300 bg-transparent text-black placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Email e Telefono */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-black mb-2 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@esempio.com"
                  className="w-full px-0 py-3 border-b border-gray-300 focus:outline-none focus:border-black transition-colors duration-300 bg-transparent text-black placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-black mb-2 uppercase tracking-wide">
                  Telefono
                </label>
                <input
                  type="tel"
                  placeholder="+39"
                  className="w-full px-0 py-3 border-b border-gray-300 focus:outline-none focus:border-black transition-colors duration-300 bg-transparent text-black placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Descrizione Progetto */}
            <div>
              <label className="block text-xs font-bold text-black mb-2 uppercase tracking-wide">
                Descrizione Progetto
              </label>
              <textarea
                rows="4"
                placeholder="Descrivi brevemente il tuo progetto..."
                className="w-full px-0 py-3 border-b border-gray-300 focus:outline-none focus:border-black transition-colors duration-300 resize-none bg-transparent text-black placeholder-gray-400"
                required
              ></textarea>
            </div>

            {/* Allega Foto */}
            <div>
              <label className="block text-xs font-bold text-black mb-2 uppercase tracking-wide">
                Allega Foto (opzionale)
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="flex items-center justify-center w-full py-6 border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-wide font-bold">
                      Carica File
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black border border-black transition-all duration-300"
            >
              Invia Richiesta
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

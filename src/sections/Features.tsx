// Importação das imagens que serão usadas no componente
import AppFrame from "../assets/app_frame.png";   // Imagem do app frame
import ShieldCheck from "../assets/icons/check.png"; // icone de segurança
import Coins from "../assets/icons/coins.png";   // Icone de moedas
import Frames from "../assets/frames.png";  // Imagem de frames com logos de soluções de pagamento

// Função que define o componente Features
function Features() {
  return (
    <section
      id="features" // ID para referenciar a seçao de funcionalidades
      className="flex max-w-7xl flex-col gap-10 px-8 pt-10 lg:px-12 xl:m-auto xl:pt-20" // Estilos Tailwind para o layout
    >
      {/* Primeira parte com o título e descrição de como o produto ajuda */}
      <article className="m-auto w-[30ch] text-center text-gray-500 md:m-0 md:w-full">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          Make every penny count {/* Titulo principal */}
        </h2>
        <p>
          Spend smarter, lower your bills, get cashback on everything you buy,
          <br />
          and unlock credit to grow your business.
        </p> {/* Descriçao */}
      </article>

      {/* Primeira parte das funcionalidades */}
      <article className="flex w-full flex-col gap-8 overflow-hidden xl:h-96 xl:flex-row">
        {/* Cartão com a descrição de como pagar com Kobodrop */}
        <div className="flex flex-col rounded-2xl bg-sky-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
          <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:text-left">
            <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[18ch] md:m-0 md:text-left">
              Pay with Kobodrop, quick, simple and easy
            </h2> {/* Título sobre a facilidade de pagar com Kobodrop */}
            <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left">
              Paying your bills on Kobodrop has never been easier. Whether you
              are paying for electricity or internet, Kobodrop gets it done
              within seconds.
            </p> {/* Descriçao sobre como pagar */}
          </div>

          {/* Imagem do app */}
          <div className="m-auto mt-10 max-w-72 md:mx-10 md:w-1/2 lg:mx-0">
            <img src={AppFrame} alt="Kobodrop app frame" /> {/* Exibe a imagem do app */}
          </div>
        </div>

        {/* Seção de segurança */}
        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-indigo-100 p-10 xl:w-1/3">
          <div className="w-fit rounded-full bg-indigo-200 p-4">
            <img src={ShieldCheck} alt="" /> {/* icone de segurança */}
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">
            Bank level security {/* Titulo de segurança */}
          </h2>
          <p className="text-gray-500">
            Your money is 100% safe and secure on Kobodrop. No hassles, no
            glitches, get access to your money anytime.
          </p> {/* Descrição sobre a segurança do Kobodrop */}
        </div>
      </article>

      {/* Segunda parte das funcionalidades */}
      <article className="flex w-full flex-col gap-8 xl:h-96 xl:flex-row">
        {/* Seção de redução de custos */}
        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-orange-100 p-10 xl:w-1/3">
          <div className="w-fit rounded-full bg-orange-200 p-4">
            <img src={Coins} alt="" /> {/* icone de moedas */}
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">
            Cost reduction {/* Titulo sobre redução de custos */}
          </h2>
          <p className="text-gray-500">
            Kobodrop reduced payments maintenance and processing fees. No hidden
            fees.
          </p> {/* Descrição sobre como o Kobodrop reduz custos */}
        </div>

        {/* Seção sobre envio, recebimento e troca de dinheiro */}
        <div className="flex flex-col gap-8 overflow-hidden rounded-2xl bg-sky-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
          <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:mt-0 md:w-1/2 md:text-left">
            <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[18ch] md:m-0 md:text-left">
              Send, receive and Exchange money
            </h2> {/* Titulo sobre como enviar, receber e trocar dinheiro */}
            <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left">
              Transfers, payments all work on Kobodrop. Get your alert message
              immediately after a completed transaction.
            </p> {/* Descrição sobre as funcionalidades de transferencia */}
          </div>

          {/* Imagem de soluções de pagamento */}
          <div className="m-auto max-w-96 md:mt-36 md:w-1/2">
            <img
              src={Frames}
              alt="Frame displaying logos of various payment solutions"
            /> {/* Exibe a imagem com logos de soluções de pagamento */}
          </div>
        </div>
      </article>
    </section>
  );
}

// Exporta o componente Features para ser utilizado em outro lugar
export default Features;

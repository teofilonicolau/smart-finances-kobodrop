// Importação de imagens e componentes
import KobodropLight from "../assets/logos/kobodrop_logo_bright.png";  // Logo da Kobodrop (versão clara)
import StoreLinks, { BtnTypes } from "../common/StoreLinks";  // Componente de links para as lojas de apps
import Twitter from "../assets/logos/icons8-twitterx.svg";  // icone do Twitter
import Facebook from "../assets/logos/icons8-facebook.svg";  // icone do Facebook
import Linkedin from "../assets/logos/icons8-linkedin.svg";  // Ícone do LinkedIn

// Função do componente Footer (Rodapé)
function Footer() {
  return (
    // Seção principal do rodapé, com fundo cinza escuro
    <section className="bg-gray-800">
      <div className="flex max-w-7xl flex-col px-8 py-12 text-gray-300 lg:px-12 xl:m-auto">
        
        {/* Seção de links e logo */}
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">
          {/* Logo e slogan */}
          <div>
            <img
              className="mb-4 w-36"  // Define a largura e a margem inferior
              src={KobodropLight}  // Caminho para o logo da Kobodrop
              alt="Light version of Kobodrop logo"  // Texto alternativo para o logo
            />
            <p>Start spending the smart way</p>  {/* Slogan do rodapé */}
          </div>
          
          {/* Seção com dois grupos de links: 'Product' e 'Resources' */}
          <div className="flex gap-10">
            {/* Links de 'Product' */}
            <div className="flex flex-col gap-2">
              <p className="text-gray-400">Product</p>  {/* Título da seção */}
              <a href="#">Overview</a>  {/* Link para Overview */}
              <a href="#">Features</a>  {/* Link para Features */}
              <a href="#">Solutions</a>  {/* Link para Solutions */}
              <a href="#">Contact</a>  {/* Link para Contact */}
              <a href="#">Releases</a>  {/* Link para Releases */}
            </div>
            {/* Links de 'Resources' */}
            <div className="flex flex-col gap-2">
              <p className="text-gray-400">Resources</p>  {/* Título da seção */}
              <a href="#">Blog</a>  {/* Link para Blog */}
              <a href="#">Newsletter</a>  {/* Link para Newsletter */}
              <a href="#">Events</a>  {/* Link para Events */}
              <a href="#">Help Centre</a>  {/* Link para Help Centre */}
              <a href="#">Support</a>  {/* Link para Support */}
            </div>
          </div>
          
          {/* Seção com o titulo 'Get the app' e botões para baixar o app */}
          <div className="w-fit">
            <h2>Get the app</h2>  {/* Título da seção */}
            <StoreLinks type={BtnTypes.Variant} />  {/* Componente de botões para baixar o app */}
          </div>
        </div>

        {/* Linha divisoria e seção de redes sociais e copyright */}
        <div className="mt-14 flex justify-between border-t-2 border-t-gray-700 pt-10">
          <p className="w-[16ch] text-gray-400 md:w-full">
            &copy; 2024 Kobodrop. All rights reserved.  {/* Texto de copyright */}
          </p>
          
          {/* Seção com links de redes sociais */}
          <div className="flex gap-6">
            {/* Link para o Twitter */}
            <a href="https://twitter.com" target="_blank">
              <img src={Twitter} alt="Twitter logo" />  {/* Ícone do Twitter */}
            </a>
            {/* Link para o Facebook */}
            <a href="https://www.facebook.com" target="_blank">
              <img src={Facebook} alt="Facebook logo" />  {/* Ícone do Facebook */}
            </a>
            {/* Link para o LinkedIn */}
            <a href="https://www.linkedin.com" target="_blank">
              <img src={Linkedin} alt="Linkedin logo" />  {/* Ícone do LinkedIn */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Exporta o componente Footer
export default Footer;

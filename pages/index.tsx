import gcaspp from "../public/400dpiLogo.png"
import Image from "next/image"


const Home = () => {
  return (
    <main className='w-full h-screen flex flex-col items-center'>
      <Image src={gcaspp} alt="" width={350} height={200} />
      <div className="flex flex-col items-center gap-2">
        <a className="font-semibold hover:underline hover:text-blue-800 " href="http://sistemas.gcaspp.com.br:4442/">SISTEMA GERAL</a>
        <a className="font-semibold hover:underline hover:text-blue-800 " href='https://nfe.gcaspp.com:4441/Home.aspx'>ISS ONLINE</a>
        <a className="font-semibold hover:underline hover:text-blue-800 " href='https://acessoonline.gcaspp.com:4441/'>ACESSO</a>
        <a className="font-semibold hover:underline hover:text-blue-800 " href='https://ssmonline.gcaspp.com:4441/'>SSM</a>
        <a className="font-semibold hover:underline hover:text-blue-800 " href='https://protocoloonline.gcaspp.com:4441/'>PROTOCOLO</a>
        <a className="font-semibold hover:underline hover:text-blue-800 " href='https://ouvidoriaonline.gcaspp.com:4441/wpsolicitacao.aspx?wYz6sAtyfTO6rY4ZFq3aHxY7xwVddc4LNbFBihTbeVg'>OUVIDORIA</a>
        <a className="font-semibold hover:underline hover:text-blue-800 " href='https://ouvidoriaonline.gcaspp.com:4441/login.aspx?pmapresentacao'>OUVIDORIA ADM</a>
        <a className="font-semibold hover:underline hover:text-blue-800 " href='https://servicosonline.gcaspp.com:4441/pmapresentacao'>PORTAL DO CIDADÃO</a>
        <a className="font-semibold hover:underline hover:text-blue-800 " href='https://servidoronline.gcaspp.com:4441/redirecionacliente.aspx?pmapresentacao'>PORTAL DO SERVIDOR</a>
        <a className="font-semibold hover:underline hover:text-blue-800 " href='https://transparenciaonline.gcaspp.com:4441/home.aspx'>PORTAL DA TRANSPARÊNCIA</a>
        <a className="font-semibold hover:underline hover:text-blue-800 " href='https://transparenciaonlineadm.gcaspp.com:4441/login.aspx'>PORTAL DA TRANSPARÊNCIA ADM</a>
      </div>
    </main>
  )
}

export default Home

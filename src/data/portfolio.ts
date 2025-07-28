// data/portfolio.ts
interface PortfolioItem {
  id: string;
  title: string;
  service: string;
  videoUrl: string;
  thumbnail: string;
  isShort: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'corp1',
    title: 'Eletron Energia',
    service: 'corporativo',
    videoUrl: 'https://youtu.be/v1svJDEKL_Q',
    thumbnail: '/images/Corporativos/1 Hotel San Juan.jpg',
    isShort: false
  },
  {
    id: 'corp2',
    title: 'Laquila Advogados',
    service: 'corporativo',
    videoUrl: 'https://youtube.com/shorts/rzK13JlIaNk',
    thumbnail: '/images/Corporativos/2 Laquila Advogados.jpg',
    isShort: true
  },
  {
    id: 'corp3',
    title: 'Renner Coatings',
    service: 'corporativo',
    videoUrl: 'https://www.youtube.com/watch?v=0YuzvYhOQIs&list=TLGGGQMGUInZQLYxNDA3MjAyNQ ',
    thumbnail: '/images/Corporativos/3 renner coatings.jpg',
    isShort: false
  },
  {
    id: 'corp4',
    title: 'Fábrica Font Life',
    service: 'corporativo',
    videoUrl: 'https://www.youtube.com/watch?v=cCjqBkgxO4E&list=TLGGEEx2eUvS-l4xNDA3MjAyNQ ',
    thumbnail: '/images/Corporativos/4 Font Life.jpg',
    isShort: false
  },
  {
    id: 'corp5',
    title: 'Maha 3D',
    service: 'corporativo',
    videoUrl: 'https://www.youtube.com/watch?v=3pTDRD-hpi4&list=TLGGAX2PqJu5ww8xNDA3MjAyNQ',
    thumbnail: '/images/Corporativos/5 Maha3d.jpg',
    isShort: false
  },
  {
    id: 'corp6',
    title: 'Gasoline Speed Shop',
    service: 'corporativo',
    videoUrl: 'https://drive.google.com/file/d/1UaRMOsLZC-dABx3SE_UXSS4Wdbua7XdF/preview',
    thumbnail: '/images/Corporativos/6 Reels Gasoline.jpg',
    isShort: true
  },
  //casamento
  {
    id: 'casamento1',
    title: 'Camila & Jheannyto',
    service: 'casamentos',
    videoUrl: 'https://www.youtube.com/watch?v=tHbMNt1FsIc',
    thumbnail: '/images/casamento/1 Camila E jheannyto.jpg',
    isShort: false
  },
  {
    id: 'casamento2',
    title: 'Mel e Lucas',
    service: 'casamentos',
    videoUrl: 'https://www.youtube.com/watch?v=vz5V5Z0vIuk',
    thumbnail: '/images/casamento/2 Mel e Lucas.jpg',
    isShort: false
  },
  {
    id: 'casamento3',
    title: 'Vitória e Marco',
    service: 'casamentos',
    videoUrl: 'https://youtu.be/3aeKEoaUW9o',
    thumbnail: '/images/casamento/3 vitoria e marco.jpg',
    isShort: false
  },
  {
    id: 'casamento4',
    title: 'Cindie e Marcio',
    service: 'casamentos',
    videoUrl: 'https://youtu.be/vB1JH3QNV3Q',
    thumbnail: '/images/casamento/4 cindie e marcio.jpg',
    isShort: false
  },
  {
    id: 'casamento5',
    title: 'Eduarda e Maurício',
    service: 'casamentos',
    videoUrl: 'https://youtu.be/YCAvaQdP4QM',
    thumbnail: '/images/casamento/5 casamento eduarda e mauricio.jpg',
    isShort: false
  },
  //festas
  {
    id: 'festa1',
    title: 'PUC In RIO',
    service: 'festas',
    videoUrl: 'https://www.youtube.com/shorts/bjlu-cJDW7s?feature=share',
    thumbnail: '/images/Festas/1 Reels Puc In Rio.jpg',
    isShort: true
  },
  {
    id: 'festa2',
    title: 'FILET C7',
    service: 'festas',
    videoUrl: 'https://www.youtube.com/watch?v=Smp2q4UzvOA',
    thumbnail: '/images/Festas/2 filet C7.jpg',
    isShort: false
  },
  {
    id: 'festa3',
  title: 'Aftermovie - Cervejada',
  service: 'festas',
  videoUrl: 'https://drive.google.com/file/d/1-s--K-cN4R_SEIaU5cA-EJPdcAUgWtgk/preview',
  thumbnail: '/images/Festas/3 cervejada CATO.jpg',
  isShort: true
},
{
    id: 'festa4',
  title: 'FILET C7',
  service: 'festas',
  videoUrl: 'https://drive.google.com/file/d/1EIY_s5pax5opWlJ8OCe4tvnSlTr5_FIt/preview',
  thumbnail: '/images/Festas/5 reels filet ultimo.jpg',
  isShort: true
},
{
    id: 'festa5',
  title: 'FILET C7 ',
  service: 'festas',
  videoUrl: 'https://drive.google.com/file/d/163gwWaBwbQfpeTejO1VM0iR_1_vJgslG/preview',
  thumbnail: '/images/Festas/4 filet C7 .jpg',
  isShort: true
},

//imobiliario
{
  id: 'imobiliario1',
    title: 'J8 Imóveis',
      service: 'imobiliario',
        videoUrl: 'https://www.youtube.com/watch?v=PXUtkdD8twI&list=TLGGXe_TPpZUko0xNDA3MjAyNQ',
          thumbnail: '/images/Imobiliários/1 casa condominio green village.jpg',
            isShort: false
},
{
  id: 'imobiliario2',
    title: 'J8 Imóveis',
      service: 'imobiliario',
        videoUrl: 'https://www.youtube.com/watch?v=GuftdLUtgxM&list=TLGG9kBr2zQGIfcxNDA3MjAyNQ',
          thumbnail: '/images/Imobiliários/2 casa santa felicidade.jpg',
            isShort: false
},
{
  id: 'imobiliario3',
    title: 'J8 Imóveis',
      service: 'imobiliario',
        videoUrl: 'https://www.youtube.com/watch?v=iAlNSEl72zs&list=TLGGVIKIAJiS4bUxNDA3MjAyNQ',
          thumbnail: '/images/Imobiliários/3 imovel bacacheri.jpg',
            isShort: false
},
{
  id: 'imobiliario4',
    title: 'J8 Imóveis',
      service: 'imobiliario',
        videoUrl: 'https://www.youtube.com/watch?v=3OY7M1z83g8&list=TLGGwvujbCWVSrgxNDA3MjAyNQ&t=1s',
          thumbnail: '/images/Imobiliários/4 imovel santa felicidade 2.jpg',
            isShort: false
},
{
  id: 'imobiliario5',
    title: 'J8 Imóveis',
      service: 'imobiliario',
        videoUrl: 'https://www.youtube.com/watch?v=fEXjQyxbFuI&list=TLGGG2B-ssFLRMgxNDA3MjAyNQ',
          thumbnail: '/images/Imobiliários/5 apartamento J8 graciosa.jpg',
            isShort: false
},
{
  id: 'imobiliario6',
    title: 'J8 Imóveis',
      service: 'imobiliario',
        videoUrl: 'https://www.youtube.com/watch?v=ym8e2c7pIOM&list=TLGG5YsNc6TrBR0xNDA3MjAyNQ',
          thumbnail: '/images/Imobiliários/6 Imovel Xaxim J8 - frame at 0m3s.jpg',
            isShort: false
},
//social media
{
  id: 'social-media1',
    title: 'Bar ZéPelin',
      service: 'social-media',
        videoUrl: 'https://www.youtube.com/shorts/QBjNsKBdgWI',
          thumbnail: '/images/Social Midia/1 zepelin.jpg',
            isShort: true
},
{
  id: 'social-media2',
    title: 'Flora Cozinha Familiar',
      service: 'social-media',
        videoUrl: 'https://www.youtube.com/shorts/52Lx4tqYPK0',
          thumbnail: '/images/Social Midia/2 flora.jpg',
            isShort: true
},
{
  id: 'social-media3',
    title: 'NIUÊ.BAR',
      service: 'social-media',
        videoUrl: 'https://www.youtube.com/shorts/QzCnQen9cf8',
          thumbnail: '/images/Social Midia/3 niue.jpg',
            isShort: true
},
{
  id: 'social-media4',
    title: 'Bar ZéPelin',
      service: 'social-media',
        videoUrl: 'https://www.youtube.com/shorts/rXcG0R_JjT0',
          thumbnail: '/images/Social Midia/4 Drink.JPG',
            isShort: true
},
{
  id: 'social-media5',
    title: 'Feijoada P4',
      service: 'social-media',
        videoUrl: 'https://www.youtube.com/shorts/0WN5g_jZhPQ',
          thumbnail: '/images/Social Midia/5 feijoada p4.jpg',
            isShort: true
},
{
  id: 'social-media6',
    title: 'Feijoada Daôci',
      service: 'social-media',
        videoUrl: 'https://www.youtube.com/shorts/Z7ysVZfCqLI',
          thumbnail: '/images/Social Midia/6 feijoada Daoci.jpg',
            isShort: true
},
{
  id: 'social-media7',
    title: 'Dom Carmelito',
      service: 'social-media',
        videoUrl: 'https://www.youtube.com/shorts/EBfzcNWC72U',
          thumbnail: '/images/Social Midia/7 reels tabua frios.jpg',
            isShort: true
},
{
  id: 'social-media8',
    title: 'Dom Carmelito',
      service: 'social-media',
        videoUrl: 'https://www.youtube.com/shorts/HwHK7byfiQY',
          thumbnail: '/images/Social Midia/8 Prato Dom Carmelito.jpg',
            isShort: true
},
{
  id: 'social-media9',
    title: 'Flora Cozinha Familiar',
      service: 'social-media',
        videoUrl: 'https://www.youtube.com/shorts/iZIrlox9V2Y',
          thumbnail: '/images/Social Midia/9 Peixe Flora.jpg',
            isShort: true
},
{
  id: 'social-media10',
    title: 'NIUÊ.BAR',
      service: 'social-media',
        videoUrl: 'https://www.youtube.com/shorts/9bZPwZbrjd4',
          thumbnail: '/images/Social Midia/10 reels niue.jpg',
            isShort: true
},
];
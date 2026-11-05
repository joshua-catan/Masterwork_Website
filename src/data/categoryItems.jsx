export { Guitar, Bass, Keyboard, Drums }

const Guitar = [
    {
        id: 1,
        image: "https://www.gibson.com/cdn/shop/files/EILS5RBNH_3_Front.png?v=1765388472&width=823",
        name: "Gibson Les Paul Standard '50s",
        description: "The Gibson Les Paul Standard '50s is a classic electric guitar featuring a mahogany body, a maple top, a mahogany neck, and a rosewood fingerboard. Its Burstbucker pickups deliver warm, powerful tones with excellent sustain, making it suitable for blues, rock, and other music genres.",
        price: "$2,499.00",
    },
    {
        id: 2,
        image: "https://www.gibson.com/cdn/shop/files/EILJDEBNH1_25041520880_2_Front.png?v=1764958429&width=823",
        name: "Fender American Professional II Stratocaster",
        description: "The Fender American Professional II Stratocaster is a versatile electric guitar featuring an alder body, a comfortable maple neck, and three V-Mod II single-coil pickups. It delivers clear, balanced tones and excellent playability, making it suitable for blues, rock, pop, and many other styles.",
        price: "$2,999.00",
    },
    {
        id: 3,
        image: "https://www.gibson.com/cdn/shop/files/EIGSGSCHNHR_3_Front.png?v=1765999118&width=823",
        name: "Gibson SG Standard",
        description: "The Gibson SG Standard is a lightweight solid-body electric guitar featuring a mahogany body, a mahogany neck, and a rosewood fingerboard. Its dual humbucking pickups produce powerful, rich tones, making it a popular choice for rock, blues, and hard rock music.",
        price: "$2,499.00",
    },
    {
        id: 4,
        image: "https://www.gibson.com/cdn/shop/files/EOCAVSNHR_3_Front_4b928fe1-95f4-4df9-b32f-49257cd985bc.png?v=1786027034&width=823",
        name: "Epiphone Casino",
        description: "The Epiphone Casino is a fully hollow electric guitar known for its lightweight construction and distinctive vintage sound. Its dual P-90 pickups produce bright, clear, and warm tones, making it suitable for blues, rock, jazz, and indie music.",
        price: "$3,499.00",
    },
    {
        id: 5,
        image: "https://www.gibson.com/cdn/shop/files/EAC3ANCH1_1_Body.png?v=1746195877&width=1100",
        name: "Fender CN-25 Nylon 3/4",
        description: "The Fender CN-25 Nylon 3/4 is a compact classical guitar designed for beginners and players who prefer a smaller instrument. Its nylon strings produce a warm, mellow sound suitable for classical music, fingerstyle playing, and practice.",
        price: "$299.00",
    },
    {
        id: 6,
        image: "https://www.gibson.com/cdn/shop/files/ECPW200VSGH1_1_Body.webp?v=1744041827&width=1100",
        name: "Epiphone IGC Pre-War SJ-200 Rosewood Reissue, Vintage Sunburst",
        description: "The Epiphone Inspired by Gibson Custom Pre-War SJ-200 Rosewood Reissue is a jumbo acoustic guitar inspired by the original Gibson SJ-200. Its rosewood back and sides and spruce top provide rich resonance, powerful projection, and a full-bodied acoustic sound.",
        price: "$1,499.00",
    },
    {
        id: 7,
        image: "https://www.gibson.com/cdn/shop/files/ECDVR3NANH1_1_Body.webp?v=1751915059&width=1100",
        name: "Epiphone IGC Pre-War SJ-200 Rosewood Reissue, Vintage Sunburst",
        description: "The Epiphone Inspired by Gibson Custom Pre-War SJ-200 Rosewood Reissue is a jumbo acoustic guitar inspired by the legendary SJ-200 design. It is known for its large body, strong projection, and rich acoustic resonance.",
        price: "$1,499.00",
    },
    {
        id: 8,
        image: "https://www.gibson.com/cdn/shop/files/EAECCBNH1_1_Body.png?v=1767730087&width=1100",
        name: "Epiphone IGC Pre-War SJ-200 Rosewood Reissue, Vintage Sunburst",
        description: "The Epiphone Inspired by Gibson Custom Pre-War SJ-200 Rosewood Reissue is a jumbo acoustic guitar designed to deliver a full, resonant sound. Its large body provides powerful projection and a rich tone suited for strumming, performances, and recording.",
        price: "$799.00",
    },
    {
        id: 9,
        image: "https://www.gibson.com/cdn/shop/files/EMEDMKANNH1_24121500012_1_Body.png?v=1770745328&width=1100",
        name: "Epiphone IGC Pre-War SJ-200 Rosewood Reissue, Vintage Sunburst",
        description: "The Epiphone Inspired by Gibson Custom Pre-War SJ-200 Rosewood Reissue is a jumbo acoustic guitar with a distinctive vintage-inspired design. It offers a full-bodied acoustic tone, rich resonance, and strong projection for both strumming and fingerstyle playing.",
        price: "$999.00",
    },
]

const Bass = [
    {
        id: 10,
        image: "https://www.gibson.com/cdn/shop/files/EBG3CHCHR_3_Front.png?v=1786467008&width=823",
        name: "American Professional Precision Bass",
        description: "The Fender American Professional Precision Bass is a professional electric bass featuring an alder body, a maple neck, and a V-Mod II split-coil pickup. It delivers the classic punchy Precision Bass tone with strong low frequencies and clear mids.",
        price: "$2,499.00",
    },
    {
        id: 11,
        image: "https://www.gibson.com/cdn/shop/files/EBEMWGMNH1_3_Front.png?v=1745528822&width=823",
        name: "Epiphone Embassy Bass, Wanderlust Green Metallic",
        description: "The Epiphone Embassy Bass, Wanderlust Green Metallic is a versatile electric bass featuring an alder body, a comfortable maple neck, and a split-coil pickup. It delivers the familiar punchy Precision Bass sound, making it suitable for rock, pop, funk, and other music styles.",
        price: "$1,999.00",
    },
    {
        id: 12,
        image: "https://www.gibson.com/cdn/shop/files/EBG3EBCHR_3_Front.png?v=1786053530&width=823",
        name: "Epiphone SG Bass with Rosewood Fretboard, Ebony",
        description: "The Epiphone SG Bass with Rosewood Fretboard, Ebony is a signature electric bass designed in collaboration with Mastodon bassist Troy Sanders. It combines a distinctive appearance with powerful bass tones and a playing feel suited to rock and heavier music styles.",
        price: "$1,999.00",
    },
    {
        id: 13,
        image: "https://www.gibson.com/cdn/shop/files/EIGTB6SIMNHR_3_Front.png?v=1786053976&width=823",
        name: "American Vintage II 1954 Precision Bass",
        description: "The Fender American Vintage II 1954 Precision Bass recreates the design of Fender's original 1954 Precision Bass. It features vintage-inspired construction, period-accurate hardware, and a pickup designed to reproduce the classic sound of the early Precision Bass.",
        price: "$1,999.00",
    },
    {
        id: 14,
        image: "https://www.gibson.com/cdn/shop/files/EONB4CHNH1_front.png?v=1745530049&width=823",
        name: "Ibanez Soundgear SR",
        description: "The Ibanez Soundgear SR is a modern electric bass known for its slim neck profile, comfortable body design, and versatile sound. Its electronics provide a wide range of tones, making it suitable for rock, jazz, funk, and contemporary music.",
        price: "$1,499.00",
    },
    {
        id: 15,
        image: "https://www.gibson.com/cdn/shop/files/EIGRBNANH1_front.png?v=1745526894&width=823",
        name: "Gibson SG Standard Bass, Heritage Cherry",
        description: "The Gibson SG Standard Bass features the iconic double-cutaway SG body design and a mahogany construction. Its bass pickups deliver a powerful, full-bodied sound, while its distinctive shape and Heritage Cherry finish give it a classic appearance.",
        price: "$799.00",
    },
    {
        id: 15,
        image: "https://www.gibson.com/cdn/shop/files/EIG3MDNANH1_3_Front.png?v=1758308622&width=823",
        name: "Mike Dirnt Grabber G-3 Bass",
        description: "Mike Dirnt is the bassist and co-founder of the iconic punk rock band Green Day. A member of the Rock and Roll Hall of Fame, his distinctive bass lines, vocal contributions, and energetic stage presence have been integral to Green Day’s success. Now, Mike Dirnt has collaborated with Epiphone to recreate the Gibson Grabber G-3 bass that he has played on countless tours and albums, including Green Day’s groundbreaking 1994 album, “Dookie,” which recently celebrated its 30th anniversary.",
        price: "$1,499.00",
    },
    {
        id: 16,
        image: "https://www.gibson.com/cdn/shop/files/EBEMSBUNHR_3_Front.png?v=1786053500&width=823",
        name: "Embassy Bass with Rosewood Fretboard",
        description: "The Embassy bass is Epiphone’s premier solidbody bass model and an Epiphone original, designed in Kalamazoo and first introduced in 1963. While Epiphone has a long and rich history of manufacturing basses before that year, the Embassy Bass was Epiphone’s first solidbody electric model to feature a 34” scale length.",
        price: "$899.00",
    },
    {
        id: 17,
        image: "https://www.gibson.com/cdn/shop/files/EIGTB6EMRNHR_3_Front.png?v=1786053864&width=823",
        name: "Thunderbird '64 with Rosewood",
        description: "he Thunderbird ’64 features a 34” scale, nine-ply mahogany/walnut neck-through-body with mahogany body wings, just like the vintage models.",
        price: "$899.00",
    },
    {
        id: 18,
        image: "https://www.gibson.com/cdn/shop/files/EIGRBEBNH1_front.png?v=1745526731&width=823",
        name: "Grabber Bass, Ebony",
        description: "The Epiphone Grabber Bass is an Inspired by Gibson reissue of the vintage 70s era classic that has been played by everyone from Gene Simmons and Krist Novoselic to Mike Dirnt and Lou Barlow, to name a few.",
        price: "$999.00",
    },
]

const Keyboard = [
    {
        id: 19,
        image: "https://www.yamaha.com/yamahavgn/PIM/Images/P125-BK_o_0001_735x735_cef5741855d6f3d2531a7e59633acb86.jpg",
        name: "Yamaha P-125",
        description: "The Yamaha P-125 is an 88-key digital piano featuring Yamaha's Graded Hammer Standard keyboard and Pure CF Sound Engine. It provides realistic piano sounds and a responsive playing experience, making it suitable for beginners, home practice, and performances.",
        price: "$999.00",
    },
    {
        id: 20,
        image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/roland_fp_30x_bk_portable_slim_piano_with_1610625949_1617183.jpg",
        name: "Roland FP-30X Portable Digital Piano with Bluetooth",
        description: "The Roland FP-30X is a portable 88-key digital piano featuring Roland's PHA-4 Standard keyboard and SuperNATURAL Piano sound engine. It offers expressive piano sounds, realistic key response, and Bluetooth connectivity for music practice and performance.",
        price: "$649.00",
    },
    {
        id: 21,
        image: "https://www.casio.com/content/dam/casio/product-info/locales/ph/en/emi/product/P/PX/PXS/px-s1100bk/assets/PX-S1100BK_main01.png.transform/main-visual-pc/image.png",
        name: "Casio PX-S1100BK",
        description: "The Casio PX-S1100BK is a slim 88-key digital piano featuring Casio's Smart Scaled Hammer Action Keyboard and AiR sound source. It offers realistic piano tones, a compact design, and Bluetooth audio and MIDI connectivity for home practice and portable use.",
        price: "$499.00",
    },
]

const Drums = [
    {
        id: 22,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytAKX1c3p8qG55aG8C1oDfl4zurvZwsgJ83TlCIEMkHbHGP4Iph6rxvU4&s=10",
        name: "Pearl Export Series",
        description: "The Pearl Export Series is an acoustic drum kit designed for beginner and intermediate drummers. It delivers a versatile sound suitable for practice, rehearsals, and live performances across rock, pop, and other music genres.",
        price: "$930.10",
    },
    {
        id: 22,
        image: "https://images.openai.com/static-rsc-1/I9M8QZ-3QaOqWo19whCpzC4lFJuS_VJ1NIKR4h6OXRwTYPCG3WTo7szhkZ9jgW6b8Hg6VaJhJFhF0JAu8yNqzoXNsSg-EvaWt0ViBNlP-J2ZaXxyG3fUGj9mAq9jXI_XvDJRsAxYp4MEWAaABrnVkQ6GgAHv0sjVu8dm7oUOnCyckDy627mZPBkvO_kaUZLmRyI2wjErXDzuDJyrrGVSi_tCypc0Aku3dNeMNK3dd6faRYFcozTjGq0iaajbNt_in4Mf2eShLOdsSu3fJe3RNA",
        name: "Tama Imperialstar",
        description: "The Tama Imperialstar is a complete acoustic drum set designed for beginner and intermediate players. It provides responsive drum tones and reliable hardware, making it suitable for practice, rehearsals, and live performances.",
        price: "$1,299.00",
    },
    {
        id: 24,
        image: "https://images.openai.com/static-rsc-1/7wIXMuvpW3KCcLBIpcHoPGFoSW8CaM-_eoJpeNl7JGhMDvMDE_6SZYiE5WGs7_vucqd5y8oeCxmV6vN-6m5aZv5orMLwMz7nxjcapGcHlIt3n3IVs9lMjcmOpVaei2XP-jRnCnEO2JEGKOwna_OACpvRt1-GJPUgfOuUMQgNSAI2XhcbpeK2wWH7_i9jHiUxlyavEgaGNqFGrRmZ_VSXI6KDNSp5UmUf5w_shy0NMKkL13MZhS1kMulce_tlV-Ox2VXK2eEe2RQXabWHpnwFYA",
        name: "Yamaha Stage Custom Birch",
        description: "The Yamaha Stage Custom Birch is an acoustic drum kit featuring birch shells known for their focused sound, strong attack, and balanced tone. It is suitable for studio recording, rehearsals, and live performances across various music genres.",
        price: "$1,499.00",
    },
    {
        id: 25,
        image: "https://images.openai.com/static-rsc-4/g4EvBCOdLfoO6qkYpzDLS04BHd0T5jcvvRWIgeyqfIuEGkxIzXaEnb9-qCm9ccbJyd-rJC5OoOAH3ImZNGUHix2J4daE8aVAVIWD0nlqsyYXKfvdRp2bXdyAgINm7iHc0kltVqRqS8TgCPQa4CvgQXkS8OyxLA1iRckM4ScaUyvWdIeb1XpprEPXt2D5Dfw1?purpose=fullsize",
        name: "Ludwig Classic Maple",
        description: "The Ludwig Classic Maple is a professional acoustic drum series featuring maple shells that produce warm tones, balanced resonance, and excellent projection. It is designed for studio recording, professional drumming, and live performances.",
        price: "$3,499.00",
    },
]
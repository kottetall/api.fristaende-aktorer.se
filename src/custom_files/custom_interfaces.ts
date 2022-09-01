interface Systemstod {
    id: number
    namn: string
    forkortning: string | null
    mer_information: URL | null
    skapad: string
    senast_uppdaterad: string
}

interface Tjanst {
    id: number
    namn: string
    forkortning: string | null
    mer_information: URL | null
    systemstod: number | null
    skapad: string
    senast_uppdaterad: string
}

interface Kategori {
    id: number
    namn: string
    alternativ_namn: string | null
    skapad: string
    senast_uppdaterad: string
}

interface Instruktion {
    id: number
    titel: string
    kategori: number | null
    instruktion: string
    viktig_information: string[] | null
    bilder: string[] | null
    kalla: string
    alternativ_titel: string | null
    alternativ_instruktion: string | null
    systemstod: number | null
    tjanst: number | null
    skapad: string
    senast_uppdaterad: string
}

interface Felsokning {
    id: number
    titel: string
    kategori: number | null
    instruktion: string
    viktig_information: string | string[] | null
    bilder: string | string[] | null
    kalla: URL | null
    systemstod: number | null
    tjanst: number | null
    skapad: string
    senast_uppdaterad: string
}
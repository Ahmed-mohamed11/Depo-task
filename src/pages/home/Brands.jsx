export default function Brands() {
    const brands = [
        { name: "Kindle Fire", logo: "kindle fire" },
        { name: "Donnelly", logo: "Donnelly" },
        { name: "Imation", logo: "imation" },
        { name: "Motul", logo: "MOTUL" },
        { name: "Omom", logo: "omom" },
        { name: "Les Echos", logo: "les Echos" },
        { name: "Vueling", logo: "vueling" },
        { name: "Indeed", logo: "indeed" },
        { name: "Omron", logo: "OMRON" },
        { name: "Brembo", logo: "brembo" },
        { name: "Prime Video", logo: "prime video" },
        { name: "Viesmann", logo: "VIESMANN" },
    ]

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Trusted by leading brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {brands.map((brand) => (
                    <div key={brand.name} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                        <span className="text-blue-600 font-bold text-lg">{brand.logo}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
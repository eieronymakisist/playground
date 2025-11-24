import AtroposBanner from "../components/AtroposBanner";

export default function BikeShop() {

      const pageStyle = {
        width: "100%",
        backgroundImage: `url(${'https://t4.ftcdn.net/jpg/01/98/24/71/360_F_198247162_JwrVkhqowZb4NJC24156nV6QYRhsV8Qf.jpg'})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }

    return (
        <div className="bikeShop d-flex align-items-center justify-content-center" style={pageStyle}>
            <div className="mt-5 d-flex flex-row mb-5 gap-5">
                <AtroposBanner 
                    mainItem="https://www.pngkey.com/png/full/632-6320638_akrapovic-gp-exhaust-r3.png"
                    background1="https://img.freepik.com/premium-photo/vivid-dynamic-neon-light-waves-create-vibrant-abstract-cosmic-space-full-energy-color-aig62_31965-501441.jpg?semt=ais_hybrid&w=740&q=80"
                    brandLogo="https://images.seeklogo.com/logo-png/20/2/akrapovic-logo-png_seeklogo-207692.png"
                    height={700}
                    width={400}
                    vertical={true}
                />
                <AtroposBanner 
                    mainItem="https://powersports.honda.com/motorcycle/dual-sport/-/media/products/family/crf300ls/panel-features/desktop/2025/2025-crf300ls-1190x736.png"
                    background1="https://www.pngarts.com/files/5/Desert-Transparent-Images.png"
                    // background2="https://media.istockphoto.com/id/1360408960/vector/realistic-starry-night-sky-galaxy-background-abstract-constellation-background-with-nebula.jpg?s=612x612&w=0&k=20&c=jRiMFd_-cW1i1eKvSDbNEpR6pf2xiwtIorKjV4N3z0k="
                    brandLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Honda_Logo.svg/1276px-Honda_Logo.svg.png"
                    height={400}
                    width={700}
                    vertical={false}
                />
                <AtroposBanner 
                    mainItem="https://www.araihelmet.eu/storage/uploads/collections/439/thumbnail_image.png?v=2025-01-21-134828"
                    background1="https://static.vecteezy.com/system/resources/previews/002/710/058/non_2x/fluid-gradient-background-vector.jpg"
                    brandLogo="https://www.24helmets.de/media/image/17/b1/1c/arai-logo-2_600x600.png"
                    height={700}
                    width={400}
                    vertical={true}

                />
            </div>
        </div>
    )
}